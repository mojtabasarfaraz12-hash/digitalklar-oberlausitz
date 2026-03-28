import Link from "next/link";
import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "outline" | "gold";
  size?: "sm" | "md" | "lg";
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  onClick?: () => void;
}

const variants = {
  primary:
    "bg-gradient-to-r from-accent-dark to-accent-light text-white hover:shadow-[var(--shadow-glow)] hover:scale-[1.02]",
  secondary:
    "bg-surface-2 text-text-primary border border-border hover:border-accent/50 hover:scale-[1.02]",
  outline:
    "bg-transparent text-text-primary border border-border hover:border-accent hover:text-accent hover:scale-[1.02]",
  gold: "bg-gradient-to-r from-gold-dark to-gold text-bg font-semibold hover:shadow-[var(--shadow-gold-glow)] hover:scale-[1.02]",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className = "",
  type = "button",
  disabled = false,
  onClick,
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-300 ${variants[variant]} ${sizes[size]} ${disabled ? "opacity-50 pointer-events-none" : ""} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
}
