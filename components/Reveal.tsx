"use client";

import { MotionConfig, motion } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Seconds to wait before animating. */
  delay?: number;
  /** Vertical offset to slide in from (negative = from above). */
  y?: number;
  /** Animate as soon as the page loads instead of when scrolled into view. */
  immediate?: boolean;
  as?: "div" | "h1";
};

/**
 * Fade/slide-in wrapper so the page itself can stay a server component.
 * Plays once, and honours the visitor's "reduce motion" OS setting.
 */
export default function Reveal({
  children,
  className,
  delay = 0,
  y = 40,
  immediate = false,
  as = "div",
}: RevealProps) {
  const Component = as === "h1" ? motion.h1 : motion.div;
  const target = { opacity: 1, y: 0 };

  return (
    <MotionConfig reducedMotion="user">
      <Component
        className={className}
        initial={{ opacity: 0, y }}
        {...(immediate
          ? { animate: target }
          : { whileInView: target, viewport: { once: true, margin: "0px 0px -10% 0px" } })}
        transition={{ duration: immediate ? 0.8 : 0.5, delay }}
      >
        {children}
      </Component>
    </MotionConfig>
  );
}
