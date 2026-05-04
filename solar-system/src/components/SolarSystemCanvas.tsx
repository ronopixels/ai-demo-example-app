import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { planets, sun } from "../data/planets";

type Props = {
  className?: string;
  selectedId: string | null;
  onSelectId: (id: string | null) => void;
};

function createStarfield(count: number, spread: number) {
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * spread;
    positions[i * 3 + 1] = (Math.random() - 0.5) * spread;
    positions[i * 3 + 2] = (Math.random() - 0.5) * spread;
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  const mat = new THREE.PointsMaterial({
    color: 0xffffff,
    size: 0.06,
    transparent: true,
    opacity: 0.55,
    depthWrite: false,
  });
  return new THREE.Points(geo, mat);
}

export function SolarSystemCanvas({ className, selectedId, onSelectId }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const selectedRef = useRef(selectedId);
  selectedRef.current = selectedId;
  const onSelectRef = useRef(onSelectId);
  onSelectRef.current = onSelectId;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x030712, 0.018);

    const camera = new THREE.PerspectiveCamera(48, width / height, 0.1, 500);
    camera.position.set(0, 10, 22);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.05;
    container.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.minDistance = 6;
    controls.maxDistance = 42;
    controls.maxPolarAngle = Math.PI / 1.95;

    const ambient = new THREE.AmbientLight(0x334155, 0.35);
    scene.add(ambient);

    const sunLight = new THREE.PointLight(0xfff1c2, 120, 80, 1.8);
    scene.add(sunLight);

    const sunGeo = new THREE.SphereGeometry(sun.radius, 48, 48);
    const sunMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color(sun.color),
      emissive: new THREE.Color(sun.emissive ?? sun.color),
      emissiveIntensity: 1.4,
      roughness: 0.4,
    });
    const sunMesh = new THREE.Mesh(sunGeo, sunMat);
    sunMesh.userData.bodyId = sun.id;
    scene.add(sunMesh);

    const starfield = createStarfield(2800, 90);
    scene.add(starfield);

    const pivots: THREE.Object3D[] = [];
    const meshes: THREE.Mesh[] = [];
    const defaultEmissive = new Map<string, THREE.Color | null>();

    const orbitLineMat = new THREE.LineBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.12,
    });

    for (const p of planets) {
      const pivot = new THREE.Object3D();
      scene.add(pivot);
      pivots.push(pivot);

      const curve = new THREE.EllipseCurve(0, 0, p.orbitRadius, p.orbitRadius, 0, 2 * Math.PI, false);
      const pts = curve.getPoints(128).map((pt) => new THREE.Vector3(pt.x, 0, pt.y));
      const orbitGeo = new THREE.BufferGeometry().setFromPoints(pts);
      const orbitLine = new THREE.LineLoop(orbitGeo, orbitLineMat.clone());
      scene.add(orbitLine);

      const geo = new THREE.SphereGeometry(p.radius, 40, 40);
      const mat = new THREE.MeshStandardMaterial({
        color: new THREE.Color(p.color),
        emissive: p.emissive ? new THREE.Color(p.emissive) : new THREE.Color(0x000000),
        emissiveIntensity: p.emissive ? 0.15 : 0.02,
        roughness: 0.65,
        metalness: 0.08,
      });
      const mesh = new THREE.Mesh(geo, mat);
      mesh.position.set(p.orbitRadius, 0, 0);
      mesh.userData.bodyId = p.id;
      pivot.add(mesh);
      meshes.push(mesh);
      defaultEmissive.set(p.id, p.emissive ? new THREE.Color(p.emissive) : null);

      if (p.id === "saturn") {
        const ringGeo = new THREE.RingGeometry(p.radius * 1.35, p.radius * 2.2, 96);
        const ringMat = new THREE.MeshBasicMaterial({
          color: 0xc4b59a,
          side: THREE.DoubleSide,
          transparent: true,
          opacity: 0.55,
        });
        const ring = new THREE.Mesh(ringGeo, ringMat);
        ring.rotation.x = -Math.PI / 2;
        mesh.add(ring);
      }
    }

    const raycaster = new THREE.Raycaster();
    const pointer = new THREE.Vector2();

    const onPointerDown = (event: PointerEvent) => {
      const rect = renderer.domElement.getBoundingClientRect();
      pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      pointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
      raycaster.setFromCamera(pointer, camera);
      const targets: THREE.Object3D[] = [sunMesh, ...meshes];
      const hits = raycaster.intersectObjects(targets, false);
      const first = hits[0];
      if (first?.object.userData.bodyId) {
        onSelectRef.current(first.object.userData.bodyId as string);
      } else {
        onSelectRef.current(null);
      }
    };

    renderer.domElement.addEventListener("pointerdown", onPointerDown);

    const clock = new THREE.Clock();
    let rafId = 0;

    const animate = () => {
      rafId = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();
      const sel = selectedRef.current;

      sunMesh.rotation.y = t * sun.spinSpeed;

      planets.forEach((p, i) => {
        const pivot = pivots[i];
        pivot.rotation.y = t * 0.12 * p.orbitSpeed;
        const mesh = meshes[i];
        mesh.rotation.y = t * p.spinSpeed;
      });

      starfield.rotation.y = t * 0.01;

      meshes.forEach((mesh) => {
        const id = mesh.userData.bodyId as string;
        const mat = mesh.material as THREE.MeshStandardMaterial;
        const base = defaultEmissive.get(id);
        const selected = id === sel;
        if (selected) {
          mat.emissive = new THREE.Color(0x38bdf8);
          mat.emissiveIntensity = 0.5;
        } else {
          mat.emissive = base ? base.clone() : new THREE.Color(0x000000);
          mat.emissiveIntensity = base ? 0.15 : 0.02;
        }
      });

      const sunMatLive = sunMesh.material as THREE.MeshStandardMaterial;
      sunMatLive.emissiveIntensity = sel === sun.id ? 1.95 : 1.35;

      controls.update();
      renderer.render(scene, camera);
    };
    animate();

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
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", onResize);
      renderer.domElement.removeEventListener("pointerdown", onPointerDown);
      controls.dispose();
      renderer.dispose();
      if (renderer.domElement.parentElement === container) {
        container.removeChild(renderer.domElement);
      }
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
        if (obj instanceof THREE.LineLoop) {
          obj.geometry.dispose();
          (obj.material as THREE.Material).dispose();
        }
      });
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={className}
      role="img"
      aria-label="Interactive 3D model of the Solar System. Drag to orbit the camera; click a planet to select."
    />
  );
}
