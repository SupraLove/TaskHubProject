"use client";

import { Heading } from "@/components/ui/Heading";
import { SearchField } from "@/components/ui/search-field/SearchField";
import { ProjectStats } from "./project-stats/ProjectStats";
import { ProjectStatisticsChart } from "./project-chart/ProjectStatisticsChart";

export function Dashboard() {
  return (
    <div className="grid grid-cols-[2.7fr_1fr]">
      <div>
        <div className="flex items-center justify-between mb-5">
          <Heading>Dashboard</Heading>
          <SearchField value="" onChange={() => {}} />
        </div>
        <div className="grid grid-cols-[27%_73%] gap-6">
          <ProjectStats />
          <ProjectStatisticsChart />
        </div>
      </div>
      <div className="p-5 h-screen flex items-center justify-center">CHATS</div>
    </div>
  );
}
