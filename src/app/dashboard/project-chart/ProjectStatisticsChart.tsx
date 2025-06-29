import { useState } from "react";
import { ProjectChartHeader } from "./ProjectChartHeader";
import { monthlyData, yearlyData } from "./project-chart.data";
import { ProjectChart } from "./ProjectChart";

export function ProjectStatisticsChart() {
  const [selectedRange, setSelectedRange] = useState<ITimeRange>({
    label: "Yearly",
    value: "yearly",
  });

  const chartData = selectedRange.value === "yearly" ? yearlyData : monthlyData;
  return (
    <div className=" h-full bg-white p-5 rounded-2xl dark:bg-neutral-800">
      <ProjectChartHeader
        onRangeChange={setSelectedRange}
        selectedRange={selectedRange}
      />
      <ProjectChart data={chartData} />
    </div>
  );
}
