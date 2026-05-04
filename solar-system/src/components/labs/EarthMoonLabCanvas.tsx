import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

type Props = {
  className?: string;
  onPick: (key: "earth" | "moon" | null) => void;
};

function disposeScene(scene: THREE.Scene) {
  scene.traverse((obj) => {
    if (obj instanceof THREE.Mesh) {
      obj.geometry.dispose();
      const m = obj.material;
      if (Array.isArray(m)) m.forEach((x) => x.dispose());
      else m.dispose();
    }
    if (obj instanceof THREE.Points) {
      obj.geometry.dispose();
      (obj.material as THREE.Material).dispose();
    }
  });
}

export function EarthMoonLabCanvas({ className, onPick }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const onPickRef = useRef(onPick);
  onPickRef.current = onPick;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x020617);
    scene.fog = new THREE.FogExp2(0x020617, 0.028);

    const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 200);
    camera.position.set(5, 3.2, 7);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    container.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.minDistance = 4;
    controls.maxDistance = 22;

    scene.add(new THREE.AmbientLight(0x93c5fd, 0.35));
    const sunDir = new THREE.DirectionalLight(0xfff7ed, 1.25);
    sunDir.position.set(-6, 4, 4);
    scene.add(sunDir);

    const earth = new THREE.Mesh(
      new THREE.SphereGeometry(1.1, 48, 48),
      new THREE.MeshStandardMaterial({
        color: 0x2563eb,
        emissive: 0x0ea5e9,
        emissiveIntensity: 0.08,
        roughness: 0.55,
        metalness: 0.08,
      })
    );
    earth.userData.pick = "earth" as const;
    scene.add(earth);

    const moonPivot = new THREE.Object3D();
    scene.add(moonPivot);

    const moon = new THREE.Mesh(
      new THREE.SphereGeometry(0.32, 32, 32),
      new THREE.MeshStandardMaterial({
        color: 0x9ca3af,
        roughness: 0.9,
        metalness: 0.05,
      })
    );
    moon.position.set(2.8, 0, 0);
    moon.userData.pick = "moon" as const;
    moonPivot.add(moon);

    const stars = new THREE.Points(
      (() => {
        const geo = new THREE.BufferGeometry();
        const pos = new Float32Array(900 * 3);
        for (let i = 0; i < 900; i++) {
          pos[i * 3] = (Math.random() - 0.5) * 80;
          pos[i * 3 + 1] = (Math.random() - 0.5) * 80;
          pos[i * 3 + 2] = (Math.random() - 0.5) * 80;
        }
        geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
        return geo;
      })(),
      new THREE.PointsMaterial({ color: 0xffffff, size: 0.04, transparent: true, opacity: 0.5 })
    );
    scene.add(stars);

    const raycaster = new THREE.Raycaster();
    const pointer = new THREE.Vector2();

    const onPointerDown = (event: PointerEvent) => {
      const rect = renderer.domElement.getBoundingClientRect();
      pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      pointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
      raycaster.setFromCamera(pointer, camera);
      const hits = raycaster.intersectObjects([earth, moon], false);
      const first = hits[0];
      const key = first?.object.userData.pick as "earth" | "moon" | undefined;
      onPickRef.current(key ?? null);
    };
    renderer.domElement.addEventListener("pointerdown", onPointerDown);

    const clock = new THREE.Clock();
    let raf = 0;

    const tick = () => {
      raf = requestAnimationFrame(tick);
      const t = clock.getElapsedTime();
      earth.rotation.y = t * 0.35;
      moonPivot.rotation.y = t * 0.55;
      moon.rotation.y = t * 0.2;
      stars.rotation.y = t * 0.01;
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
      renderer.domElement.removeEventListener("pointerdown", onPointerDown);
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
      aria-label="Earth and Moon lab — click Earth or the Moon to read facts."
    />
  );
}
