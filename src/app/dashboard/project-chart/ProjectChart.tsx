import { useMemo } from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { ProjectChartTooltip } from "./ProjectChartTooltip";

interface Props {
  data: IChartDataPoint[];
}

export function ProjectChart({ data }: Props) {
  const maxData = useMemo(() => {
    if (!data || data.length === 0) return null;

    let maxValue = 0;
    let maxPeriod = "";

    data.forEach((item) => {
      if (item.value > maxValue) {
        maxValue = item.value;
        maxPeriod = item.period;
      }
    });
    return { value: maxValue, period: maxPeriod };
  }, [data]);
  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart
        data={data}
        margin={{ top: 10, right: 10, left: -20, bottom: 8 }}
      >
        <defs>
          <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#725BF2" stopOpacity={0.3} />
            <stop offset="95%" stopColor="#725BF2" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid
          strokeDasharray="0"
          vertical={false}
          stroke="var(--chart-line)"
        />
        <XAxis
          dataKey="period"
          axisLine={false}
          tickLine={false}
          tick={{ fontSize: 12, fill: "#9CA3AF" }}
          padding={{ left: 20, right: 20 }}
        />
        <YAxis
          axisLine={false}
          tickLine={false}
          tick={{ fontSize: 12, fill: "#9CA3AF" }}
          domain={[0, "dataMax + 10"]}
        />
        <Tooltip content={<ProjectChartTooltip />} cursor={false} />

        {maxData && (
          <ReferenceLine
            x={maxData.period}
            stroke="#6366F1"
            strokeDasharray="5.5"
            strokeWidth={1.5}
          />
        )}
        <Area
          type="monotone"
          dataKey="value"
          stroke="#6366F1"
          strokeWidth={2}
          fillOpacity={1}
          fill="url(#colorGradient)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
