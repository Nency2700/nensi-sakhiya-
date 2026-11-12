"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export function CursorAura() {
  const x = useMotionValue(-200);
  const y = useMotionValue(-200);
  const ringX = useSpring(x, { stiffness: 180, damping: 22, mass: 0.45 });
  const ringY = useSpring(y, { stiffness: 180, damping: 22, mass: 0.45 });
  const glowX = useSpring(x, { stiffness: 70, damping: 20, mass: 0.8 });
  const glowY = useSpring(y, { stiffness: 70, damping: 20, mass: 0.8 });
  const [enabled, setEnabled] = useState(false);
  const [hot, setHot] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    if (!fine) return;
    setEnabled(true);
    const onMove = (event: MouseEvent) => {
      x.set(event.clientX);
      y.set(event.clientY);
      const target = event.target as HTMLElement | null;
      setHot(Boolean(target?.closest("a, button, [data-cursor='hot']")));
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [x, y]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed z-0 hidden h-[460px] w-[460px] rounded-full md:block"
        style={{
          left: glowX,
          top: glowY,
          x: "-50%",
          y: "-50%",
          background:
            "radial-gradient(circle, rgba(196,92,62,0.18) 0%, rgba(196,92,62,0.05) 42%, transparent 70%)",
        }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none fixed z-[90] hidden rounded-full border border-[var(--ink)]/35 md:block"
        style={{ left: ringX, top: ringY, x: "-50%", y: "-50%" }}
        animate={{
          width: hot ? 72 : 34,
          height: hot ? 72 : 34,
          backgroundColor: hot ? "rgba(196,92,62,0.08)" : "rgba(255,253,249,0)",
        }}
        transition={{ type: "spring", stiffness: 260, damping: 22 }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none fixed z-[91] hidden h-1.5 w-1.5 rounded-full bg-[var(--accent)] md:block"
        style={{ left: x, top: y, x: "-50%", y: "-50%" }}
      />
    </>
  );
}
