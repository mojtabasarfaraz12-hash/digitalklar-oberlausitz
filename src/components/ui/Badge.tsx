import type { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  variant?: "default" | "accent" | "gold";
}

const variants = {
  default: "bg-surface-2 text-text-secondary border-border",
  accent: "bg-accent/10 text-accent-light border-accent/20",
  gold: "bg-gold/10 text-gold border-gold/20",
};

export function Badge({ children, variant = "default" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium ${variants[variant]}`}
    >
      {children}
    </span>
  );
}
