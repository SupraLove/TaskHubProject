import { ProgressBar } from '../ProgressBar'
import { taskStore } from '@/stores/task.store'
import { isToday } from 'date-fns'
import {
	Edit2,
	Folder,
	Link as LucideLink,
	MessageSquareMore,
	Plus
} from 'lucide-react'
import { observer } from 'mobx-react-lite'
import Image from 'next/image'
import Link from 'next/link'
import { useMemo } from 'react'

import { SubTaskCreateModal } from '@/app/dashboard/last-tasks/create-sub-task/SubTaskCreateModal'

import { ICON_MAP } from '@/utils/icon-map'

import type { ITask } from '@/types/last-tasks.types'

import { Pages } from '@/config/pages'

interface Props {
	task: ITask
}

export const Task = observer(({ task }: Props) => {
	const completedCount = task.subTasks.filter(t => t.isCompleted).length
	const totalCount = task.subTasks.length
	const progress = Math.round((completedCount / totalCount) * 100)
	const Icon = ICON_MAP[task.icon]

	const dueDate = useMemo(() => {
		return isToday(task.dueDate.date)
			? 'Today'
			: Math.ceil((+task.dueDate.date - Date.now()) / (1000 * 60 * 60 * 24)) +
					' days'
	}, [task.dueDate.date])
	return (
		<div className='p-2.5'>
			<div className='mb-1.5 flex items-start justify-between'>
				<div className='flex items-start gap-2'>
					<div className='bg-primary/10 text-primary flex items-center justify-center rounded-full p-1.5'>
						<Icon />
					</div>
					<div className='w-32'>
						<span className='leading-snug font-medium wrap-normal opacity-90'>
							{task.title}
						</span>
						<div>
							<span className='text-sm opacity-50'>Due: {dueDate}</span>
						</div>
					</div>
				</div>
				<div className='flex items-center -space-x-3'>
					{task.users.map(user => (
						<div key={user.id}>
							<Image
								src={user.avatarPath}
								alt={user.name}
								width={40}
								height={40}
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
						<LucideLink
							className='opacity-40'
							size={16}
						/>
						{task.links.length}
					</span>
				</div>
				<div className='flex items-center gap-2'>
					<SubTaskCreateModal taskId={task.id} />
					<Link
						href={Pages.TASK_EDIT(task.id)}
						className='border-primary text-primary hover:bg-primary/10 rounded-full border bg-white p-2 transition-colors'
					>
						<Edit2 size={18} />
					</Link>
				</div>
			</div>
		</div>
	)
})
