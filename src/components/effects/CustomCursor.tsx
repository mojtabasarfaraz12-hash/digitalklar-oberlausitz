"use client";

import { useEffect, useRef } from "react";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const posRef = useRef({ x: 0, y: 0 });
  const ringPosRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number>(0);
  const isPointerRef = useRef(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    const onMouseMove = (e: MouseEvent) => {
      posRef.current.x = e.clientX;
      posRef.current.y = e.clientY;
      dot.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
      dot.style.opacity = "1";
      ring.style.opacity = "0.6";
    };

    const onMouseLeave = () => {
      dot.style.opacity = "0";
      ring.style.opacity = "0";
    };

    const onMouseEnter = () => {
      dot.style.opacity = "1";
      ring.style.opacity = "0.6";
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = !!target.closest(
        "a, button, [role='button'], input, textarea, select, [data-cursor='pointer']"
      );

      if (isInteractive !== isPointerRef.current) {
        isPointerRef.current = isInteractive;
        if (isInteractive) {
          dot.style.width = "40px";
          dot.style.height = "40px";
          dot.style.background = "rgba(245, 158, 11, 0.9)";
          ring.style.width = "60px";
          ring.style.height = "60px";
          ring.style.borderColor = "rgba(245, 158, 11, 0.4)";
        } else {
          dot.style.width = "10px";
          dot.style.height = "10px";
          dot.style.background = "rgba(255, 255, 255, 0.9)";
          ring.style.width = "36px";
          ring.style.height = "36px";
          ring.style.borderColor = "rgba(255, 255, 255, 0.2)";
        }
      }
    };

    const animateRing = () => {
      ringPosRef.current.x += (posRef.current.x - ringPosRef.current.x) * 0.2;
      ringPosRef.current.y += (posRef.current.y - ringPosRef.current.y) * 0.2;
      ring.style.transform = `translate(${ringPosRef.current.x}px, ${ringPosRef.current.y}px) translate(-50%, -50%)`;
      rafRef.current = requestAnimationFrame(animateRing);
    };

    document.addEventListener("mousemove", onMouseMove, { passive: true });
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);
    document.addEventListener("mouseover", onMouseOver, { passive: true });
    rafRef.current = requestAnimationFrame(animateRing);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.removeEventListener("mouseover", onMouseOver);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="fixed top-0 left-0 z-[9999] pointer-events-none mix-blend-difference hidden md:block"
        style={{
          width: 10,
          height: 10,
          borderRadius: "50%",
          background: "rgba(255, 255, 255, 0.9)",
          opacity: 0,
          transition: "width 0.2s, height 0.2s, background 0.2s, opacity 0.15s",
          willChange: "transform",
        }}
      />
      <div
        ref={ringRef}
        className="fixed top-0 left-0 z-[9998] pointer-events-none hidden md:block"
        style={{
          width: 36,
          height: 36,
          borderRadius: "50%",
          border: "1.5px solid rgba(255, 255, 255, 0.2)",
          opacity: 0,
          transition: "width 0.25s, height 0.25s, border-color 0.25s, opacity 0.15s",
          willChange: "transform",
        }}
      />
    </>
  );
}
