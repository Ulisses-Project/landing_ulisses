import { Card } from "@/components/ui/card";
import type { MilestoneItem } from "./Roadmap";

interface RoadmapDesktopProps {
  roadmap: MilestoneItem[];
}

export const RoadmapDesktop = ({ roadmap }: RoadmapDesktopProps) => {
  return (
    <div className="hidden lg:block relative">
      {/* Connecting line */}
      <div className="absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/20 via-primary/50 to-primary/20"></div>

      <div className="grid grid-cols-4 gap-4 [&>*]:flex">
        {roadmap.map((milestone, i) => (
          <div key={i} className="relative flex">
            {/* Timeline dot */}
            <div className="absolute top-24 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
              <div className="w-4 h-4 rounded-full bg-primary ring-4 ring-background shadow-lg shadow-primary/50"></div>
            </div>

            <Card className="px-4 py-6 bg-card backdrop-blur-sm border hover:border-primary/50 transition-all group mt-32 flex flex-col w-full">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <milestone.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="mb-4">
                <div className="text-3xl font-bold text-primary">
                  {milestone.year}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground whitespace-nowrap">
                {milestone.title}
              </h3>
              <ul className="space-y-2 flex-grow">
                {milestone.milestones.map((item, j) => (
                  <li
                    key={j}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0"></span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};
