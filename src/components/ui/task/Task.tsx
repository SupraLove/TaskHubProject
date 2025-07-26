import { ProgressBar } from '../ProgressBar'
import { format, isToday } from 'date-fns'
import {
	Edit2,
	Folder,
	Link as LucideLink,
	MessageSquareMore
} from 'lucide-react'
import { observer } from 'mobx-react-lite'
import Image from 'next/image'
import Link from 'next/link'
import { useMemo } from 'react'

import { SubTaskCreateModal } from '@/app/dashboard/last-tasks/create-sub-task/SubTaskCreateModal'

import { cn } from '@/utils/cn'
import { ICON_MAP } from '@/utils/icon-map'

import type { ITask } from '@/types/last-tasks.types'

import { Pages } from '@/config/pages'

interface Props {
	task: ITask
	isColor?: boolean
	isMinimal?: boolean
}

export const Task = observer(({ task, isColor, isMinimal }: Props) => {
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
		<div
			className={cn(
				'rounded-2xl p-2.5',
				isColor && task.color,
				isColor && 'text-white'
			)}
		>
			<div
				className={cn(
					'mb-1.5 flex items-start justify-between',
					isMinimal && 'mb-0 flex-col gap-2'
				)}
			>
				<div className='flex items-start gap-2'>
					<div
						className={cn(
							'bg-primary/10 text-primary flex items-center justify-center rounded-full p-1.5',
							isColor && 'text-primary bg-white'
						)}
					>
						<Icon />
					</div>
					<div className={cn(!isMinimal && 'w-32')}>
						<span className='leading-snug font-medium wrap-normal opacity-90'>
							{task.title}
						</span>
						<div>
							<span
								className={cn('text-sm opacity-50', isColor && 'opacity-70')}
							>
								{isMinimal ? (
									<>
										{format(task.dueDate.startTime!, 'ha')} -{' '}
										{format(task.dueDate.endTime!, 'ha')}
									</>
								) : (
									<>Due: {dueDate}</>
								)}
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
								width={40}
								height={40}
								className='rounded-full border-1 border-white dark:border-none'
							/>
						</div>
					))}
				</div>
			</div>
			{!isMinimal && (
				<div className='mb-3'>
					<ProgressBar progress={progress} />
				</div>
			)}
			{!isMinimal && (
				<div className='flex items-center justify-between'>
					<div className='flex items-center gap-4'>
						<span className='flex items-center gap-1 text-sm'>
							<MessageSquareMore
								className={isColor ? 'opacity-80' : 'opacity-50'}
								size={16}
							/>
							{task.comments.length}
						</span>
						<span className='flex items-center gap-1 text-sm'>
							<Folder
								className={isColor ? 'opacity-80' : 'opacity-50'}
								size={16}
							/>
							{task.resources.length}
						</span>
						<span className='flex items-center gap-1 text-sm'>
							<LucideLink
								className={isColor ? 'opacity-80' : 'opacity-50'}
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
			)}
		</div>
	)
})
