import { LastTasksFilter } from './LastTasksFilter'
import { LastTasksSort } from './LastTasksSort'
import { taskStore } from '@/stores/task.store'
import { observer } from 'mobx-react-lite'

import { Task } from '@/components/ui/task/Task'

export const LastTasks = observer(() => {
	const filteredTasks = taskStore.filteredTasks
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
					<LastTasksSort />
					<LastTasksFilter />
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
})
