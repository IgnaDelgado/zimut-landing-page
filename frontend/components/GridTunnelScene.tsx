"use client";

import { useEffect, useRef } from "react";

import { loadThree } from "@/lib/three";

export function GridTunnelScene() {
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
      camera = new THREE.PerspectiveCamera(60, 1, 0.1, 80);
      camera.position.set(0, 0, 6);

      const tunnelGroup = new THREE.Group();
      const frames: any[] = [];
      const depth = 40;
      for (let i = 0; i < depth; i += 1) {
        const size = 2 + i * 0.18;
        const geo = new THREE.BufferGeometry();
        const vertices = new Float32Array([
          -size,
          -size,
          -i * 0.6,
          size,
          -size,
          -i * 0.6,
          size,
          size,
          -i * 0.6,
          -size,
          size,
          -i * 0.6
        ]);
        geo.setAttribute("position", new THREE.BufferAttribute(vertices, 3));
        const material = new THREE.LineBasicMaterial({
          color: i % 3 ? 0x53f6d9 : 0x6be2ff,
          transparent: true,
          opacity: 0.28 - i * 0.004
        });
        const frame = new THREE.LineLoop(geo, material);
        tunnelGroup.add(frame);
        frames.push(frame);
      }
      scene.add(tunnelGroup);

      const pulseGeometry = new THREE.PlaneGeometry(6, 6);
      const pulseMaterial = new THREE.MeshBasicMaterial({
        color: 0x0b382f,
        transparent: true,
        opacity: 0.4
      });
      const pulse = new THREE.Mesh(pulseGeometry, pulseMaterial);
      pulse.position.z = -6;
      scene.add(pulse);

      const particleCount = 500;
      const particleGeometry = new THREE.BufferGeometry();
      const particlePositions = new Float32Array(particleCount * 3);
      const particleSpeeds: number[] = [];
      for (let i = 0; i < particleCount; i += 1) {
        const radius = Math.random() * 1.6;
        const angle = Math.random() * Math.PI * 2;
        particlePositions[i * 3] = Math.cos(angle) * radius;
        particlePositions[i * 3 + 1] = Math.sin(angle) * radius;
        particlePositions[i * 3 + 2] = -Math.random() * depth * 0.6;
        particleSpeeds.push(0.01 + Math.random() * 0.02);
      }
      particleGeometry.setAttribute("position", new THREE.BufferAttribute(particlePositions, 3));
      const particleMaterial = new THREE.PointsMaterial({
        color: 0x8fffee,
        size: 0.035,
        transparent: true,
        opacity: 0.75,
        depthWrite: false
      });
      const particles = new THREE.Points(particleGeometry, particleMaterial);
      scene.add(particles);

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
        frames.forEach((frame) => {
          frame.geometry.dispose();
          (frame.material as any).dispose?.();
        });
        tunnelGroup.clear();
        pulseGeometry.dispose();
        pulseMaterial.dispose();
        particleGeometry.dispose();
        particleMaterial.dispose();
        renderer?.dispose?.();
      });

      const animate = () => {
        if (!mounted) return;
        frames.forEach((frame, index) => {
          frame.rotation.z += 0.0006 + index * 0.00002;
          frame.position.z += 0.02 + index * 0.0002;
          if (frame.position.z > 1) {
            frame.position.z = -depth * 0.6;
          }
        });
        pulseMaterial.opacity = 0.25 + Math.sin(Date.now() * 0.0012) * 0.15;
        for (let i = 0; i < particleCount; i += 1) {
          const base = i * 3 + 2;
          particlePositions[base] += particleSpeeds[i];
          if (particlePositions[base] > 0) {
            particlePositions[base] = -depth * 0.6;
          }
        }
        particleGeometry.attributes.position.needsUpdate = true;
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
