"use client";

import { useEffect, useRef } from "react";

const THREE_CDN = "https://cdn.jsdelivr.net/npm/three@0.161.0/build/three.min.js";

declare global {
  interface Window {
    THREE?: any;
  }
}

function loadThree(): Promise<any> {
  if (typeof window === "undefined") {
    return Promise.resolve(null);
  }

  if (window.THREE) {
    return Promise.resolve(window.THREE);
  }

  return new Promise((resolve, reject) => {
    const existing = document.querySelector<HTMLScriptElement>("script[data-three]");
    if (existing && window.THREE) {
      resolve(window.THREE);
      return;
    }

    const script = document.createElement("script");
    script.src = THREE_CDN;
    script.async = true;
    script.dataset.three = "true";
    script.onload = () => {
      if (window.THREE) {
        resolve(window.THREE);
      } else {
        reject(new Error("Three.js failed to load"));
      }
    };
    script.onerror = () => reject(new Error("Unable to load Three.js"));
    document.head.appendChild(script);
  });
}

export function OrbitalScene() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let animationId: number;
    let disposeFns: (() => void)[] = [];
    let resizeObserver: ResizeObserver | null = null;
    let renderer: any;
    let scene: any;
    let camera: any;
    let mounted = true;

    async function init() {
      const THREE = await loadThree();
      if (!mounted || !canvasRef.current || !THREE) return;

      renderer = new THREE.WebGLRenderer({
        canvas: canvasRef.current,
        antialias: true,
        alpha: true
      });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setClearColor(0x000000, 0);

      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
      camera.position.set(0, 0, 6);
      scene.add(camera);

      const ambient = new THREE.AmbientLight(0x8ef5d8, 0.6);
      const rim = new THREE.DirectionalLight(0x64d1ff, 0.8);
      rim.position.set(2, 4, 4);
      scene.add(ambient, rim);

      const coreMaterial = new THREE.MeshStandardMaterial({
        color: 0x70f0c4,
        metalness: 0.6,
        roughness: 0.2,
        transparent: true,
        opacity: 0.9,
        emissive: 0x0f392b,
        emissiveIntensity: 0.6
      });
      const core = new THREE.Mesh(new THREE.IcosahedronGeometry(1.1, 1), coreMaterial);
      scene.add(core);

      const haloMaterial = new THREE.MeshStandardMaterial({
        color: 0x7efbff,
        metalness: 0.2,
        roughness: 0.6,
        transparent: true,
        opacity: 0.35
      });

      const orbitals: any[] = [];
      [1.8, 2.3, 2.9].forEach((radius, idx) => {
        const geo = new THREE.TorusGeometry(radius, 0.04 + idx * 0.02, 16, 140);
        const mesh = new THREE.Mesh(geo, haloMaterial.clone());
        mesh.rotation.x = Math.random() * Math.PI;
        mesh.rotation.y = Math.random() * Math.PI;
        scene.add(mesh);
        orbitals.push(mesh);
      });

      const particleGeometry = new THREE.BufferGeometry();
      const particleCount = 650;
      const positions = new Float32Array(particleCount * 3);
      for (let i = 0; i < particleCount; i += 1) {
        const angle = Math.random() * Math.PI * 2;
        const radius = 1.5 + Math.random() * 3;
        const height = (Math.random() - 0.5) * 1.5;
        positions[i * 3] = Math.cos(angle) * radius;
        positions[i * 3 + 1] = height;
        positions[i * 3 + 2] = Math.sin(angle) * radius;
      }
      particleGeometry.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
      const particleMaterial = new THREE.PointsMaterial({
        color: 0x9cf7ff,
        size: 0.03,
        transparent: true,
        opacity: 0.7,
        depthWrite: false
      });
      const particles = new THREE.Points(particleGeometry, particleMaterial);
      scene.add(particles);

      const auroraGeometry = new THREE.RingGeometry(1.5, 3.4, 64, 1);
      const auroraMaterial = new THREE.MeshBasicMaterial({
        color: 0x4bf6c4,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.12
      });
      const aurora = new THREE.Mesh(auroraGeometry, auroraMaterial);
      aurora.rotation.x = Math.PI / 2.5;
      scene.add(aurora);

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
        renderer?.dispose?.();
        particleGeometry.dispose();
        particleMaterial.dispose();
        core.geometry.dispose();
        coreMaterial.dispose();
        auroraGeometry.dispose();
        auroraMaterial.dispose();
        orbitals.forEach((mesh) => {
          mesh.geometry.dispose();
          mesh.material.dispose();
        });
      });

      const clock = new THREE.Clock();

      const animate = () => {
        if (!mounted) return;
        const elapsed = clock.getElapsedTime();
        core.rotation.x += 0.003;
        core.rotation.y += 0.004;
        aurora.rotation.z += 0.0015;
        orbitals.forEach((mesh, index) => {
          mesh.rotation.y += 0.0008 + index * 0.0003;
          mesh.rotation.x += 0.0006;
        });
        particles.rotation.y += 0.0004;
        particles.rotation.x = Math.sin(elapsed * 0.1) * 0.1;
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
