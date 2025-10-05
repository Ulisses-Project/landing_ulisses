import { Card } from "@/components/ui/card";

interface CaseStudyProps {
  title: string;
  institution: string;
  description: string;
  image: string;
  image_alt: string;
  name: string;
  role: string;
  insights: Insights[];
}

interface Insights {
  title: string;
  value: string;
}

export const CaseStudy = ({
  title,
  institution,
  description,
  image,
  image_alt,
  name,
  role,
  insights,
}: CaseStudyProps) => {
  return (
    <Card className="overflow-hidden bg-card backdrop-blur-sm border">
      <div className="grid lg:grid-cols-2">
        <div className="relative h-64 lg:h-auto">
          <img
            src={image}
            alt={image_alt}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-8 lg:p-10">
          <div className="text-sm text-primary font-medium mb-2">
            {institution}
          </div>
          <h3 className="text-2xl font-bold mb-4 text-foreground">{title}</h3>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            {description}
          </p>
          <div className="flex items-center gap-4 mb-4">
            <div>
              <div className="font-semibold text-foreground">{name}</div>
              <div className="text-sm text-muted-foreground">{role}</div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
            {insights.map((insight, index) => (
              <div key={index}>
                <div className="text-2xl font-bold text-primary">
                  {insight.value}
                </div>
                <div className="text-xs text-muted-foreground">
                  {insight.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
};
