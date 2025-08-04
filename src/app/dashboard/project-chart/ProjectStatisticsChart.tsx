import { ProjectChart } from './ProjectChart'
import { ProjectChartHeader } from './ProjectChartHeader'
import { monthlyData, yearlyData } from './project-chart.data'
import { useState } from 'react'

export function ProjectStatisticsChart() {
	const [selectedRange, setSelectedRange] = useState<ITimeRange>({
		label: 'Yearly',
		value: 'yearly'
	})

	const chartData = selectedRange.value === 'yearly' ? yearlyData : monthlyData
	return (
		<div className='h-full w-[97%] rounded-2xl bg-white p-5 dark:bg-neutral-800'>
			<ProjectChartHeader
				onRangeChange={setSelectedRange}
				selectedRange={selectedRange}
			/>
			<ProjectChart data={chartData} />
		</div>
	)
}
