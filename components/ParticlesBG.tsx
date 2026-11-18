"use client";

import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

/** Animated particle network. Fills its positioned parent (not the whole screen). */
export default function ParticlesBG({ className = "" }: { className?: string }) {
  const [init, setInit] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduceMotion(query.matches);
    update();
    query.addEventListener("change", update);

    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));

    return () => query.removeEventListener("change", update);
  }, []);

  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      className={className}
      options={{
        fullScreen: { enable: false },
        background: { color: "transparent" },
        fpsLimit: 60,
        particles: {
          number: { value: 40, density: { enable: true } },
          color: { value: "#00BFFF" },
          links: {
            enable: true,
            color: "#00BFFF",
            distance: 150,
            opacity: 0.2,
          },
          // Keep the network visible but still for visitors who prefer reduced motion.
          move: { enable: !reduceMotion, speed: 1 },
          opacity: { value: 0.4 },
          size: { value: 2 },
        },
      }}
    />
  );
}
