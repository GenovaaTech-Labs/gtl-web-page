"use client";

import { animate, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

/**
 * Counts up to a value like "50+" or "100%" when scrolled into view.
 * The final value is rendered on the server (good for SEO / no-JS), and only
 * reset to 0 on the client if the number isn't on screen yet.
 */
export default function CountUp({ value }: { value: string }) {
  const match = value.match(/^(\d+)(.*)$/);
  const target = match ? Number(match[1]) : 0;
  const suffix = match ? match[2] : "";

  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });
  const reduceMotion = useReducedMotion();
  const [display, setDisplay] = useState<number | null>(null); // null = show final value
  const armed = useRef(false);

  // Before it scrolls into view, start from 0 (skip if motion is reduced or it's already visible).
  useEffect(() => {
    if (!match || reduceMotion || inView || armed.current) return;
    armed.current = true;
    setDisplay(0);
  }, [match, reduceMotion, inView]);

  useEffect(() => {
    if (!inView || !armed.current) return;
    const controls = animate(0, target, {
      duration: 1.5,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(Math.round(v)),
      onComplete: () => setDisplay(null),
    });
    return () => controls.stop();
  }, [inView, target]);

  if (!match) return <span>{value}</span>;

  return (
    <span ref={ref}>
      {display ?? target}
      {suffix}
    </span>
  );
}
