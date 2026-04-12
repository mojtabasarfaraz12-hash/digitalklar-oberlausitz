"use client";

import { useRef, useCallback } from "react";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface GlowCardProps {
  children: ReactNode;
  className?: string;
}

export function GlowCard({ children, className = "" }: GlowCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current || !glowRef.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    glowRef.current.style.background = `radial-gradient(300px circle at ${x}px ${y}px, rgba(124, 58, 237, 0.1), transparent 60%)`;
  }, []);

  const handleMouseEnter = useCallback(() => {
    if (glowRef.current) glowRef.current.style.opacity = "1";
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (glowRef.current) glowRef.current.style.opacity = "0";
  }, []);

  return (
    <motion.div
      ref={ref}
      className={`relative overflow-hidden rounded-2xl border border-border bg-surface-1 p-6 transition-colors duration-300 hover:border-accent/30 ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
    >
      <div
        ref={glowRef}
        className="pointer-events-none absolute -inset-px transition-opacity duration-300"
        style={{ opacity: 0 }}
      />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
