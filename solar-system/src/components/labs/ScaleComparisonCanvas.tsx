import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { planets } from "../../data/planets";

/** Display radii exaggerated for kids — relative comparison only */
const displayRadius: Record<string, number> = {
  mercury: 0.22,
  venus: 0.28,
  earth: 0.3,
  mars: 0.24,
  jupiter: 0.85,
  saturn: 0.72,
  uranus: 0.48,
  neptune: 0.46,
};

type Props = { className?: string };

function disposeScene(scene: THREE.Scene) {
  scene.traverse((obj) => {
    if (obj instanceof THREE.Mesh) {
      obj.geometry.dispose();
      const m = obj.material;
      if (Array.isArray(m)) m.forEach((x) => x.dispose());
      else m.dispose();
    }
  });
}

export function ScaleComparisonCanvas({ className }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x050816);
    scene.fog = new THREE.FogExp2(0x050816, 0.035);

    const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 120);
    camera.position.set(0, 5.2, 14);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.05;
    container.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.target.set(0, 0.6, 0);

    const hemi = new THREE.HemisphereLight(0x93c5fd, 0x1e1b4b, 0.9);
    scene.add(hemi);
    const dir = new THREE.DirectionalLight(0xffffff, 1.1);
    dir.position.set(4, 10, 6);
    scene.add(dir);

    const floor = new THREE.Mesh(
      new THREE.CircleGeometry(16, 64),
      new THREE.MeshStandardMaterial({
        color: 0x0b1224,
        metalness: 0.2,
        roughness: 0.85,
      })
    );
    floor.rotation.x = -Math.PI / 2;
    scene.add(floor);

    const group = new THREE.Group();
    scene.add(group);

    const spacing = 1.85;
    const startX = -((planets.length - 1) * spacing) / 2;
    const meshes: THREE.Mesh[] = [];

    planets.forEach((p, i) => {
      const r = displayRadius[p.id] ?? 0.25;
      const geo = new THREE.SphereGeometry(r, 40, 40);
      const mat = new THREE.MeshStandardMaterial({
        color: new THREE.Color(p.color),
        emissive: p.emissive ? new THREE.Color(p.emissive) : new THREE.Color(0x000000),
        emissiveIntensity: p.emissive ? 0.12 : 0.02,
        roughness: 0.55,
        metalness: 0.12,
      });
      const mesh = new THREE.Mesh(geo, mat);
      mesh.position.set(startX + i * spacing, r + 0.02, 0);
      mesh.userData.phase = i * 0.7;
      mesh.userData.baseR = r;
      group.add(mesh);
      meshes.push(mesh);

      const pad = new THREE.Mesh(
        new THREE.CylinderGeometry(r * 1.15, r * 1.25, 0.08, 32),
        new THREE.MeshStandardMaterial({ color: 0x111827, metalness: 0.4, roughness: 0.5 })
      );
      pad.position.set(startX + i * spacing, 0.04, 0);
      group.add(pad);

      if (p.id === "saturn") {
        const ring = new THREE.Mesh(
          new THREE.RingGeometry(r * 1.25, r * 2.1, 64),
          new THREE.MeshBasicMaterial({
            color: 0xd8c4a0,
            side: THREE.DoubleSide,
            transparent: true,
            opacity: 0.55,
          })
        );
        ring.rotation.x = -Math.PI / 2;
        ring.position.y = -0.02;
        mesh.add(ring);
      }
    });

    const clock = new THREE.Clock();
    let raf = 0;

    const tick = () => {
      raf = requestAnimationFrame(tick);
      const t = clock.getElapsedTime();
      meshes.forEach((m) => {
        const phase = (m.userData.phase as number) ?? 0;
        const base = (m.userData.baseR as number) ?? 0.3;
        m.position.y = base + 0.02 + Math.sin(t * 1.8 + phase) * 0.12;
        m.rotation.y = t * 0.35 + phase;
      });
      group.rotation.y = Math.sin(t * 0.15) * 0.08;
      controls.update();
      renderer.render(scene, camera);
    };
    tick();

    const onResize = () => {
      if (!containerRef.current) return;
      const w = containerRef.current.clientWidth;
      const h = containerRef.current.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      controls.dispose();
      renderer.dispose();
      if (renderer.domElement.parentElement === container) {
        container.removeChild(renderer.domElement);
      }
      disposeScene(scene);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={className}
      role="img"
      aria-label="Planet size parade — spin the view to compare how big each planet looks."
    />
  );
}
