"use client";

import { useEffect, useRef } from "react";

import { loadThree } from "@/lib/three";

export function HelixPortalScene() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let animationId: number;
    let renderer: any;
    let scene: any;
    let camera: any;
    let disposeFns: (() => void)[] = [];
    let resizeObserver: ResizeObserver | null = null;
    let mounted = true;

    async function init() {
      const THREE = await loadThree();
      if (!THREE || !canvasRef.current || !mounted) return;

      renderer = new THREE.WebGLRenderer({
        canvas: canvasRef.current,
        antialias: true,
        alpha: true
      });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setClearColor(0x000000, 0);

      scene = new THREE.Scene();
      scene.fog = new THREE.FogExp2(0x06120f, 0.18);

      camera = new THREE.PerspectiveCamera(55, 1, 0.1, 40);
      camera.position.set(0, 0, 5.2);

      const ambient = new THREE.AmbientLight(0x78f5d7, 0.8);
      const rim = new THREE.PointLight(0x4cbfff, 1.2, 20);
      rim.position.set(4, 2, 6);
      scene.add(ambient, rim);

      const nucleusMaterial = new THREE.MeshPhysicalMaterial({
        color: 0x6ef7c8,
        roughness: 0.1,
        metalness: 0.3,
        transmission: 1,
        thickness: 0.8,
        emissive: 0x0f3830,
        emissiveIntensity: 0.5
      });
      const nucleus = new THREE.Mesh(new THREE.IcosahedronGeometry(0.9, 1), nucleusMaterial);
      scene.add(nucleus);

      const helixGroup = new THREE.Group();
      const helixMeshes: any[] = [];
      for (let i = 0; i < 4; i += 1) {
        const points = [];
        for (let j = 0; j < 120; j += 1) {
          const angle = (j / 20) * Math.PI * 0.5 + i * 0.4;
          const radius = 1.2 + Math.sin(j * 0.05 + i) * 0.35;
          const x = Math.cos(angle) * radius;
          const y = (j / 30 - 2) * 0.5;
          const z = Math.sin(angle) * radius;
          points.push(new THREE.Vector3(x, y, z));
        }
        const curve = new THREE.CatmullRomCurve3(points);
        const geometry = new THREE.TubeGeometry(curve, 240, 0.04 + i * 0.015, 12, false);
        const material = new THREE.MeshStandardMaterial({
          color: i % 2 ? 0x5be1ff : 0x87ffd9,
          emissive: 0x072f32,
          metalness: 0.5,
          roughness: 0.2,
          transparent: true,
          opacity: 0.85 - i * 0.12
        });
        const mesh = new THREE.Mesh(geometry, material);
        mesh.rotation.y = i * 0.3;
        helixGroup.add(mesh);
        helixMeshes.push(mesh);
      }
      scene.add(helixGroup);

      const sparkCount = 900;
      const sparkGeometry = new THREE.BufferGeometry();
      const sparkPositions = new Float32Array(sparkCount * 3);
      const sparkSpeeds: number[] = [];
      for (let i = 0; i < sparkCount; i += 1) {
        const radius = 0.6 + Math.random() * 3.2;
        const angle = Math.random() * Math.PI * 2;
        sparkPositions[i * 3] = Math.cos(angle) * radius;
        sparkPositions[i * 3 + 1] = (Math.random() - 0.5) * 2.5;
        sparkPositions[i * 3 + 2] = Math.sin(angle) * radius;
        sparkSpeeds.push(0.001 + Math.random() * 0.004);
      }
      sparkGeometry.setAttribute("position", new THREE.BufferAttribute(sparkPositions, 3));
      const sparkMaterial = new THREE.PointsMaterial({
        color: 0xb7fff2,
        size: 0.02,
        transparent: true,
        opacity: 0.65,
        depthWrite: false
      });
      const sparks = new THREE.Points(sparkGeometry, sparkMaterial);
      scene.add(sparks);

      const ringMaterial = new THREE.MeshBasicMaterial({
        color: 0x00f7ff,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.2
      });
      const rings: any[] = [];
      for (let i = 0; i < 4; i += 1) {
        const geo = new THREE.RingGeometry(1.4 + i * 0.35, 1.45 + i * 0.35, 128);
        const ring = new THREE.Mesh(geo, ringMaterial.clone());
        ring.rotation.x = Math.PI / 2;
        scene.add(ring);
        rings.push(ring);
      }

      const resize = () => {
        if (!canvasRef.current || !renderer) return;
        const parent = canvasRef.current.parentElement;
        const width = parent?.clientWidth ?? window.innerWidth;
        const height = parent?.clientHeight ?? 400;
        renderer.setSize(width, height, false);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
      };

      resize();
      window.addEventListener("resize", resize);
      if (typeof ResizeObserver !== "undefined" && canvasRef.current.parentElement) {
        resizeObserver = new ResizeObserver(resize);
        resizeObserver.observe(canvasRef.current.parentElement);
      }

      disposeFns.push(() => {
        window.removeEventListener("resize", resize);
        resizeObserver?.disconnect();
        helixMeshes.forEach((mesh) => {
          mesh.geometry.dispose();
          mesh.material.dispose();
        });
        sparkGeometry.dispose();
        sparkMaterial.dispose();
        rings.forEach((ring) => {
          ring.geometry.dispose();
          (ring.material as any).dispose?.();
        });
        ringMaterial.dispose();
        nucleus.geometry.dispose();
        nucleusMaterial.dispose();
        renderer?.dispose?.();
      });

      const clock = new THREE.Clock();
      const animate = () => {
        if (!mounted) return;
        const elapsed = clock.getElapsedTime();
        nucleus.rotation.x += 0.0025;
        nucleus.rotation.y += 0.003;
        helixGroup.rotation.y += 0.0008;
        helixGroup.rotation.x = Math.sin(elapsed * 0.15) * 0.1;
        sparks.rotation.y += 0.0004;
      for (let i = 0; i < sparkCount; i += 1) {
        const base = i * 3;
        sparkPositions[base] += sparkSpeeds[i] * 0.4;
        if (sparkPositions[base] > 3.8) {
          sparkPositions[base] = -3.8;
        }
        sparkPositions[base + 1] += Math.sin(elapsed * 0.3 + i) * 0.0008;
      }
        sparkGeometry.attributes.position.needsUpdate = true;
        rings.forEach((ring, index) => {
          ring.rotation.z += 0.0005 + index * 0.0002;
          ring.material.opacity = 0.2 + Math.sin(elapsed * 0.6 + index) * 0.05;
        });
        renderer.render(scene, camera);
        animationId = requestAnimationFrame(animate);
      };

      animationId = requestAnimationFrame(animate);
    }

    init().catch((err) => console.error(err));

    return () => {
      mounted = false;
      if (animationId) cancelAnimationFrame(animationId);
      disposeFns.forEach((fn) => fn());
    };
  }, []);

  return <canvas ref={canvasRef} className="h-full w-full" aria-hidden />;
}
