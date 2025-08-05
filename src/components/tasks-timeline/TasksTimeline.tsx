import { Task } from '../ui/task/Task'
import { getHours, getMinutes } from 'date-fns'
import Image from 'next/image'

import { parseTime } from '@/utils/parse-time'

import type { TTask } from '@/types/last-tasks.types'

const HOURS = Array.from({ length: 9 }, (_, i) => i + 9)

interface Props {
	tasks: TTask[]
}

export const TasksTimeline = ({ tasks }: Props) => {
	const users = [
		...new Map(
			tasks
				.flatMap(task => task.task_participants)
				.filter(u => Boolean(u.profile))
				.map(user => [user.profile.id, user.profile])
		).values()
	]
	return (
		<div className='bg-card rounded-2xl p-3.5 dark:bg-neutral-800'>
			<div className='mb-4 flex items-center justify-between'>
				<h2 className='text-xl font-medium'>Today Tasks</h2>
				<div className='flex items-center -space-x-3'>
					{users.map(user => (
						<div key={user.id}>
							<Image
								src={user.avatar_path || ''}
								alt={user.name || ''}
								width={42}
								height={42}
								className='rounded-full border-1 border-white dark:border-none'
							/>
						</div>
					))}
				</div>
			</div>
			<div className='w-full overflow-x-auto p-3'>
				<div className='grid grid-cols-9'>
					{HOURS.map(hour => (
						<div key={hour}>
							<span className='flex-1 text-sm font-medium opacity-45'>
								{hour > 12 ? `${hour - 12} pm` : `${hour} am`}
							</span>
						</div>
					))}
				</div>
			</div>
			<div className='relative h-72'>
				{tasks.map(task => {
					if (!task.start_time || !task.end_time) return null

					const correctStartTime = parseTime(task.due_date, task.start_time)
					const correctEndTime = parseTime(task.due_date, task.end_time)

					const start = getHours(correctStartTime)
					const end = getHours(correctEndTime)

					const startMinutes = getMinutes(correctStartTime)
					const endMinutes = getMinutes(correctEndTime)

					const startPercent =
						(((start - 9) * 60 + startMinutes) / ((17 - 9) * 60)) * 100
					const endPercent =
						(((end - 9) * 60 + endMinutes) / ((17 - 9) * 60)) * 100
					const widthPercent = endPercent - startPercent

					return (
						<div
							key={task.id}
							className='absolute top-3'
							style={{
								left: `${startPercent}%`,
								width: `${widthPercent}%`
							}}
						>
							<Task
								task={task}
								isColor
								isMinimal
							/>
						</div>
					)
				})}
			</div>
		</div>
	)
}
