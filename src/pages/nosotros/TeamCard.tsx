import { Card } from "@/components/ui/card";

interface TeamCardProps {
  name: string;
  role: string;
  image: string;
  alt: string;
  description: string;
}

export const TeamCard = ({
  name,
  role,
  image,
  alt,
  description,
}: TeamCardProps) => {
  return (
    <Card className="overflow-hidden bg-card backdrop-blur-sm border">
      <div className="relative w-full h-64 bg-gradient-to-br from-primary/10 via-primary/20 to-primary/30 dark:from-primary/20 dark:via-primary/30 dark:to-primary/40 p-8 flex items-center justify-center">
        <div className="w-54 h-54 rounded-full overflow-hidden bg-background/30 backdrop-blur-sm ring-2 ring-primary/40">
          <img src={image} alt={alt} className="w-full h-full object-cover" />
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold mb-1 text-foreground">{name}</h3>
        <p className="text-sm text-primary mb-2">{role}</p>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
    </Card>
  );
};
