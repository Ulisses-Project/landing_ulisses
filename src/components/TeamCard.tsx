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
      <img src={image} alt={alt} className="w-full h-64 object-cover" />
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
