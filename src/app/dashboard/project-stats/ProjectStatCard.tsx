import Image from "next/image";
import type { IProjectStat } from "./project-stats.types";
import { cn } from "@/utils/cn";
import { formatMinutes } from "@/utils/format-minutes";

interface Props {
  projectStat: IProjectStat;
}

export function ProjectStatCard({ projectStat }: Props) {
  return (
    <div
      className={cn(
        projectStat.bgColor,
        "rounded-2xl p-6 relative overflow-hidden"
      )}
    >
      <div className="flex items-center justify-between relative z-10">
        <div className="flex flex-col items-start">
          <span className="text-3xl text-neutral-800 font-semibold mb-1">
            {projectStat.id === 3
              ? formatMinutes(projectStat.number)
              : projectStat.number}
          </span>
          <span className="text-neutral-800 text-sm">{projectStat.label}</span>
        </div>
        <div className="flex-shrink-0 ml-4">
          <Image
            src={projectStat.icon}
            alt={projectStat.label}
            width={80}
            height={80}
          />
        </div>
      </div>
    </div>
  );
}
