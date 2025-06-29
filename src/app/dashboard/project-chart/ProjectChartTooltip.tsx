interface Props {
  active?: boolean;
  payload?: Array<{
    value: number;
  }>;
}

export function ProjectChartTooltip({ active, payload }: Props) {
  if (!active || !payload || payload.length === 0) return null;

  return (
    <div className="bg-primary text-white text-sm font-medium py-2 px-2 rounded-2xl shadow">
      {payload[0].value} Projects
    </div>
  );
}
