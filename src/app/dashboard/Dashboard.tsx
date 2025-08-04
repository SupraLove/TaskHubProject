'use client'

import { Chat } from './chat/Chat'
import { LastTasks } from './last-tasks/LastTasks'
import { ProjectStatisticsChart } from './project-chart/ProjectStatisticsChart'
import { ProjectStats } from './project-stats/ProjectStats'
import { taskStore } from '@/stores/task.store'
import { useEffect } from 'react'

import { TasksTimeline } from '@/components/tasks-timeline/TasksTimeline'
import { Heading } from '@/components/ui/Heading'
import { SearchField } from '@/components/ui/search-field/SearchField'

import type { TTask } from '@/types/last-tasks.types'

export function Dashboard({ tasks }: { tasks: TTask[] }) {
	useEffect(() => {
		taskStore.loadStoreFromServer(tasks)
	}, [])

	return (
		<div className='grid h-screen grid-cols-[3.7fr_1fr]'>
			<div className='overflow-y-auto p-5'>
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
			<Chat />
		</div>
	)
}
