"use client";

import { useEffect, useState, useRef } from "react";

export function CustomCursor() {
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(false);
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const posRef = useRef({ x: 0, y: 0 });
  const ringPosRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number>(0);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) {
      setIsTouch(true);
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      posRef.current = { x: e.clientX, y: e.clientY };
      setIsVisible(true);
      // Dot follows instantly
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
      }
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = target.closest(
        "a, button, [role='button'], input, textarea, select, [data-cursor='pointer']"
      );
      setIsPointer(!!isInteractive);
    };

    // Ring follows with slight lag via RAF lerp
    const animateRing = () => {
      const speed = 0.2; // Higher = faster follow (0-1)
      ringPosRef.current.x += (posRef.current.x - ringPosRef.current.x) * speed;
      ringPosRef.current.y += (posRef.current.y - ringPosRef.current.y) * speed;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringPosRef.current.x}px, ${ringPosRef.current.y}px) translate(-50%, -50%)`;
      }
      rafRef.current = requestAnimationFrame(animateRing);
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);
    document.addEventListener("mouseover", onMouseOver);
    rafRef.current = requestAnimationFrame(animateRing);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.removeEventListener("mouseover", onMouseOver);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  if (isTouch) return null;

  return (
    <>
      {/* Inner dot — instant follow */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 z-[9999] pointer-events-none mix-blend-difference"
        style={{
          width: isPointer ? 40 : 10,
          height: isPointer ? 40 : 10,
          borderRadius: "50%",
          background: isPointer
            ? "rgba(245, 158, 11, 0.9)"
            : "rgba(255, 255, 255, 0.9)",
          boxShadow: isPointer
            ? "0 0 20px rgba(245, 158, 11, 0.6)"
            : "0 0 10px rgba(255, 255, 255, 0.3)",
          opacity: isVisible ? 1 : 0,
          transition: "width 0.2s, height 0.2s, background 0.2s, box-shadow 0.2s, opacity 0.15s",
          willChange: "transform",
        }}
      />

      {/* Outer ring — smooth lag */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 z-[9998] pointer-events-none"
        style={{
          width: isPointer ? 60 : 36,
          height: isPointer ? 60 : 36,
          borderRadius: "50%",
          border: `1.5px solid ${
            isPointer ? "rgba(245, 158, 11, 0.4)" : "rgba(255, 255, 255, 0.2)"
          }`,
          opacity: isVisible ? 0.6 : 0,
          transition: "width 0.25s, height 0.25s, border-color 0.25s, opacity 0.15s",
          willChange: "transform",
        }}
      />
    </>
  );
}
