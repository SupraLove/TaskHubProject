'use client'

import { LastTasks } from './last-tasks/LastTasks'
import { ProjectStatisticsChart } from './project-chart/ProjectStatisticsChart'
import { ProjectStats } from './project-stats/ProjectStats'

import { TasksTimeline } from '@/components/tasks-timeline/TasksTimeline'
import { Heading } from '@/components/ui/Heading'
import { SearchField } from '@/components/ui/search-field/SearchField'

export function Dashboard() {
	return (
		<div className='grid grid-cols-[2.7fr_1fr]'>
			<div>
				<div className='mb-5 flex items-center justify-between'>
					<Heading>Dashboard</Heading>
					<SearchField
						value=''
						onChange={() => {}}
					/>
				</div>
				<div className='grid grid-cols-[27%_73%] gap-6'>
					<ProjectStats />
					<ProjectStatisticsChart />
				</div>
				<LastTasks />
				<TasksTimeline />
			</div>
			<div className='flex min-h-screen items-center justify-center p-5'>
				CHATS
			</div>
		</div>
	)
}
