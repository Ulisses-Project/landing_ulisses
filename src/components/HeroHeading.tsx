import type { LucideIcon } from "lucide-react";

interface HeroHeadingProps {
  badge: LucideIcon;
  badge_str: string;
  title: string;
  subtitle: string;
}

export const HeroHeading = ({
  badge,
  badge_str,
  title,
  subtitle,
}: HeroHeadingProps) => {
  const Icon = badge;

  return (
    <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 px-4 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30"></div>
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
            <Icon className="w-4 h-4" />
            {badge_str}
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-balance text-foreground">
            {title}
          </h1>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  );
};
