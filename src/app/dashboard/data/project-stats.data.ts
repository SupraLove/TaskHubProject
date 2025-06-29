import type { IProjectStat } from "../project-stats/project-stats.types";

export const PROJECT_STATS_DATA: IProjectStat[] = [
  {
    id: 1,
    number: 92,
    label: "Acrive Projects",
    bgColor: "bg-violet-200",
    icon: "/images/icon/project-stats/active-projects.svg",
  },
  {
    id: 2,
    number: 35,
    label: "On Going Projects",
    bgColor: "bg-yellow-200",
    icon: "/images/icon/project-stats/ongoing-projects.svg",
  },
  {
    id: 3,
    number: 1149,
    label: "Working Hours",
    bgColor: "bg-pink-200",
    icon: "/images/icon/project-stats/working-hours.svg",
  },
];
