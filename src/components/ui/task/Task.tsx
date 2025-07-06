import { ProgressBar } from './ProgressBar'
import { Edit2, Folder, Link, MessageSquareMore, Plus } from 'lucide-react'
import Image from 'next/image'

import type { ITask } from '@/types/last-tasks.types'

interface Props {
	task: ITask
}

export function Task({ task }: Props) {
	const completedCount = task.subTasks.filter(t => t.isCompleted).length
	const totalCount = task.subTasks.length
	const progress = Math.round((completedCount / totalCount) * 100)
	return (
		<div className='p-2.5'>
			<div className='mb-1.5 flex items-start justify-between'>
				<div className='flex items-start gap-2'>
					<div className='bg-primary/10 text-primary flex items-center justify-center rounded-full p-1.5'>
						<task.icon />
					</div>
					<div className='w-32'>
						<span className='leading-snug font-medium wrap-normal opacity-90'>
							{task.title}
						</span>
						<div>
							<span className='text-sm opacity-50'>
								Due:{' '}
								{Math.ceil(
									(+task.dueDate - Date.now()) / (1000 * 60 * 60 * 36)
								)}
								days
							</span>
						</div>
					</div>
				</div>
				<div className='flex items-center -space-x-3'>
					{task.users.map(user => (
						<div key={user.id}>
							<Image
								src={user.avatarPath}
								alt={user.name}
								width={36}
								height={36}
								className='rounded-full border-1 border-white dark:border-none'
							/>
						</div>
					))}
				</div>
			</div>

			<div className='mb-3'>
				<ProgressBar progress={progress} />
			</div>

			<div className='flex items-center justify-between'>
				<div className='flex items-center gap-4'>
					<span className='flex items-center gap-1 text-sm'>
						<MessageSquareMore
							className='opacity-40'
							size={16}
						/>
						{task.comments.length}
					</span>
					<span className='flex items-center gap-1 text-sm'>
						<Folder
							className='opacity-40'
							size={16}
						/>
						{task.resources.length}
					</span>
					<span className='flex items-center gap-1 text-sm'>
						<Link
							className='opacity-40'
							size={16}
						/>
						{task.links.length}
					</span>
				</div>
				<div className='flex items-center gap-2'>
					<button className='bg-primary hover:bg-primary/90 rounded-full p-2 text-white transition-colors'>
						<Plus size={18} />
					</button>
					<button className='border-primary text-primary hover:bg-primary/10 rounded-full border bg-white p-2 transition-colors'>
						<Edit2 size={18} />
					</button>
				</div>
			</div>
		</div>
	)
}
