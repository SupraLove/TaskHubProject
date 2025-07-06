import { TASKS } from './last-tasks.data'

import { Task } from '@/components/ui/task/Task'

export function LastTasks() {
	return (
		<div className='mt-7'>
			<h2 className='mb-4 text-xl font-medium'>
				Last Tasks{' '}
				<span className='font-normal opacity-40'>({TASKS.length})</span>
			</h2>
			{TASKS.length ? (
				<div className='grid grid-cols-3 gap-4'>
					{TASKS.map(task => (
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
