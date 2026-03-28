"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { STATS } from "@/lib/constants";

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    const duration = 2000;
    const startTime = performance.now();

    const tick = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * value));
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [isInView, value]);

  return (
    <span ref={ref} className="text-5xl font-extrabold tracking-tight md:text-6xl lg:text-7xl">
      <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">
        {count}
      </span>
      <span className="text-accent-light">{suffix}</span>
    </span>
  );
}

export function Stats() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Subtle gradient line at top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-1/2 bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-12 px-6 md:grid-cols-4 md:gap-8">
        {STATS.map((stat, i) => (
          <motion.div
            key={stat.label}
            className="relative flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <AnimatedCounter value={stat.value} suffix={stat.suffix} />
            <span className="mt-3 text-sm font-medium text-white/40 uppercase tracking-wider">
              {stat.label}
            </span>
            {/* Divider between stats on desktop */}
            {i < STATS.length - 1 && (
              <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden h-16 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent md:block" />
            )}
          </motion.div>
        ))}
      </div>

      {/* Subtle gradient line at bottom */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-px w-1/2 bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
    </section>
  );
}
