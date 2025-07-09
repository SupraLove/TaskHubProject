import { LastTasksFilter } from './LastTasksFilter'
import { LastTasksSort } from './LastTasksSort'
import { TASKS } from './last-tasks.data'
import { useMemo, useState } from 'react'

import { Task } from '@/components/ui/task/Task'

import type { TTaskSortBy, TTaskStatus } from '@/types/last-tasks.types'

export function LastTasks() {
	const [status, setStatus] = useState<TTaskStatus | null>(null)
	const [sortByDueDate, setSortByDueDate] = useState<TTaskSortBy>('asc')

	const filteredTasks = useMemo(() => {
		const filtered = !status
			? TASKS
			: TASKS.filter(task => {
					switch (status) {
						case 'not-started':
							return task.subTasks.every(subTask => !subTask.isCompleted)
						case 'in-progress':
							return (
								task.subTasks.some(subTask => !subTask.isCompleted) &&
								task.subTasks.some(subTask => subTask.isCompleted)
							)
						case 'completed':
							return task.subTasks.every(subTask => subTask.isCompleted)
						default:
							return true
					}
				})
		const sortedTasks = filtered.sort((a, b) => {
			const dateA = new Date(a.dueDate).getTime()
			const dateB = new Date(b.dueDate).getTime()

			if (sortByDueDate === 'asc') {
				return dateA - dateB
			} else {
				return dateB - dateA
			}
		})

		return sortedTasks
	}, [status, sortByDueDate])

	return (
		<div className='mt-7'>
			<div className='mb-4 flex items-center justify-between'>
				<h2 className='text-xl font-medium'>
					Last Tasks{' '}
					<span className='font-normal opacity-40'>
						({filteredTasks.length})
					</span>
				</h2>
				<div className='flex items-center gap-2'>
					<LastTasksSort
						sortByDueDate={sortByDueDate}
						setSortByDueDate={setSortByDueDate}
					/>
					<LastTasksFilter
						status={status}
						setStatus={setStatus}
					/>
				</div>
			</div>
			{filteredTasks.length ? (
				<div className='grid grid-cols-3 gap-4'>
					{filteredTasks.map(task => (
						<div
							key={task.id}
							className='rounded-2xl bg-white'
						>
							<Task task={task} />
						</div>
					))}
				</div>
			) : (
				<div className='grid grid-cols-3 gap-2'>
					<p className='col-span-3 text-center opacity-50'>no tasks</p>
				</div>
			)}
		</div>
	)
}
