import { LastTasksFilter } from './LastTasksFilter'
import { TASKS } from './last-tasks.data'
import { useMemo, useState } from 'react'

import { Task } from '@/components/ui/task/Task'

import type { TTaskStatus } from '@/types/last-tasks.types'

export function LastTasks() {
	const [status, setStatus] = useState<TTaskStatus | null>(null)

	const filteredTask = useMemo(() => {
		if (!status) return TASKS

		switch (status) {
			case 'not-started': {
				return TASKS.filter(task =>
					task.subTasks.every(subTask => !subTask.isCompleted)
				)
			}
			case 'in-progress': {
				return TASKS.filter(task =>
					task.subTasks.some(subTask => !subTask.isCompleted)
				)
			}
			case 'completed': {
				return TASKS.filter(task =>
					task.subTasks.every(subTask => subTask.isCompleted)
				)
			}
			default:
				return TASKS
		}
	}, [status])

	return (
		<div className='mt-7'>
			<div className='mb-4 flex items-center justify-between'>
				<h2 className='text-xl font-medium'>
					Last Tasks{' '}
					<span className='font-normal opacity-40'>
						({filteredTask.length})
					</span>
				</h2>
				<LastTasksFilter
					status={status}
					setStatus={setStatus}
				/>
			</div>
			{filteredTask.length ? (
				<div className='grid grid-cols-3 gap-4'>
					{filteredTask.map(task => (
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
