import { Badge } from "./Badge";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  description?: string;
  centered?: boolean;
  gradient?: boolean;
}

export function SectionHeading({
  badge,
  title,
  description,
  centered = true,
  gradient = false,
}: SectionHeadingProps) {
  return (
    <div className={`mb-12 md:mb-16 ${centered ? "text-center" : ""}`}>
      {badge && (
        <div className={`mb-4 ${centered ? "flex justify-center" : ""}`}>
          <Badge variant="accent">{badge}</Badge>
        </div>
      )}
      <h2
        className={`text-3xl md:text-4xl lg:text-5xl font-bold leading-tight ${
          gradient ? "gradient-text" : ""
        }`}
      >
        {title}
      </h2>
      {description && (
        <p className="mt-4 max-w-2xl text-lg text-text-secondary leading-relaxed mx-auto">
          {description}
        </p>
      )}
    </div>
  );
}
