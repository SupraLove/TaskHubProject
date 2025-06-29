import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { timeRanges } from "./project-chart.data";

interface Props {
  onRangeChange: (range: ITimeRange) => void;
  selectedRange: ITimeRange;
}

export function ProjectChartHeader({ onRangeChange, selectedRange }: Props) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleRangeChange = (range: ITimeRange) => {
    onRangeChange(range);
    setIsDropdownOpen(false);
  };
  return (
    <div className="flex items-center justify-between mb-6">
      <h2 className="text-xl font-medium dark:text-white">
        Projects Statistic
      </h2>
      <div>
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="flex items-center gap-2 px-3 py-2 text-sm dark:text-white rounded-2xl border border-neutral-200 text-black"
        >
          {selectedRange.label}
          <ChevronDown size={16} />
        </button>
        {isDropdownOpen && (
          <div className="absolute right-[23%] mt-2 w-32 rounded-2xl bg-white dark:text-white dark:bg-neutral-800 text-neutral-800 border border-neutral-200 py-1 z-10">
            {timeRanges.map((range) => (
              <button
                key={range.value}
                onClick={() => handleRangeChange(range)}
                className="w-full px-3 py-2 text-sm text-left transition-colors  hover:text-primary"
              >
                {range.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
