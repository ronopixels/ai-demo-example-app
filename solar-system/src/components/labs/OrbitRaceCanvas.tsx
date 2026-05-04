import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { planets, sun } from "../../data/planets";

type Props = { className?: string };

function disposeScene(scene: THREE.Scene) {
  scene.traverse((obj) => {
    if (obj instanceof THREE.Mesh) {
      obj.geometry.dispose();
      const m = obj.material;
      if (Array.isArray(m)) m.forEach((x) => x.dispose());
      else m.dispose();
    }
    if (obj instanceof THREE.LineLoop) {
      obj.geometry.dispose();
      (obj.material as THREE.Material).dispose();
    }
    if (obj instanceof THREE.Points) {
      obj.geometry.dispose();
      (obj.material as THREE.Material).dispose();
    }
  });
}

export function OrbitRaceCanvas({ className }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x020617);
    scene.fog = new THREE.FogExp2(0x020617, 0.012);

    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 200);
    camera.position.set(0, 26, 18);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    container.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.minDistance = 12;
    controls.maxDistance = 55;
    controls.maxPolarAngle = Math.PI / 2.05;

    scene.add(new THREE.AmbientLight(0x64748b, 0.45));
    const sunLight = new THREE.PointLight(0xffe6a8, 90, 70, 1.6);
    scene.add(sunLight);

    const sunMesh = new THREE.Mesh(
      new THREE.SphereGeometry(0.55, 40, 40),
      new THREE.MeshStandardMaterial({
        color: new THREE.Color(sun.color),
        emissive: new THREE.Color(sun.emissive ?? sun.color),
        emissiveIntensity: 1.2,
      })
    );
    scene.add(sunMesh);

    const starGeo = new THREE.BufferGeometry();
    const starPos = new Float32Array(1200 * 3);
    for (let i = 0; i < 1200; i++) {
      starPos[i * 3] = (Math.random() - 0.5) * 120;
      starPos[i * 3 + 1] = (Math.random() - 0.5) * 40;
      starPos[i * 3 + 2] = (Math.random() - 0.5) * 120;
    }
    starGeo.setAttribute("position", new THREE.BufferAttribute(starPos, 3));
    const stars = new THREE.Points(
      starGeo,
      new THREE.PointsMaterial({ color: 0xffffff, size: 0.05, transparent: true, opacity: 0.45 })
    );
    scene.add(stars);

    const pivots: THREE.Object3D[] = [];
    const dots: THREE.Mesh[] = [];

    planets.forEach((p, idx) => {
      const orbitR = 1.1 + idx * 0.95;
      const curve = new THREE.EllipseCurve(0, 0, orbitR, orbitR, 0, Math.PI * 2, false);
      const pts = curve.getPoints(96).map((pt) => new THREE.Vector3(pt.x, 0, pt.y));
      const line = new THREE.LineLoop(
        new THREE.BufferGeometry().setFromPoints(pts),
        new THREE.LineBasicMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.18 })
      );
      scene.add(line);

      const pivot = new THREE.Object3D();
      scene.add(pivot);
      pivots.push(pivot);

      const dot = new THREE.Mesh(
        new THREE.SphereGeometry(0.12 + (p.id === "jupiter" ? 0.08 : 0), 20, 20),
        new THREE.MeshStandardMaterial({
          color: new THREE.Color(p.color),
          emissive: new THREE.Color(p.color),
          emissiveIntensity: 0.35,
        })
      );
      dot.position.set(orbitR, 0, 0);
      pivot.add(dot);
      dots.push(dot);
    });

    const clock = new THREE.Clock();
    let raf = 0;

    const tick = () => {
      raf = requestAnimationFrame(tick);
      const t = clock.getElapsedTime();
      sunMesh.rotation.y = t * 0.4;

      planets.forEach((p, i) => {
        const pivot = pivots[i];
        const speed = 0.35 / Math.max(p.orbitalPeriodYears, 0.2);
        pivot.rotation.y = t * speed;
        dots[i].rotation.y = t * 2;
      });

      stars.rotation.y = t * 0.02;
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
      aria-label="Orbit race — inner planets lap faster than outer planets."
    />
  );
}
