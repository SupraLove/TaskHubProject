import { ProgressBar } from '../ProgressBar'
import { format, isToday } from 'date-fns'
import {
	Edit2,
	Folder,
	Link as LucideLink,
	MessageSquareMore
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useMemo } from 'react'

import { SubTaskCreateModal } from '@/app/dashboard/last-tasks/create-sub-task/SubTaskCreateModal'

import { cn } from '@/utils/cn'
import { ICON_MAP } from '@/utils/icon-map'
import { parseTime } from '@/utils/parse-time'

import type { TTask } from '@/types/last-tasks.types'

import { DashboardPages } from '@/config/dashboard-pages'

interface Props {
	task: TTask
	isColor?: boolean
	isMinimal?: boolean
}

export const Task = ({ task, isColor, isMinimal }: Props) => {
	const completedCount = task?.sub_task?.filter(t => t.is_completed).length || 0
	const totalCount = task?.sub_task?.length || 0
	const progress = Math.round((completedCount / totalCount) * 100)
	const Icon = ICON_MAP[task.icon as keyof typeof ICON_MAP]

	const correctDate = new Date(task.due_date)

	const dueDate = useMemo(() => {
		return isToday(correctDate)
			? 'Today'
			: Math.ceil((+correctDate - Date.now()) / (1000 * 60 * 60 * 24)) + ' days'
	}, [correctDate])
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
								{isMinimal && task.start_time && task.end_time ? (
									<>
										{format(parseTime(task.due_date, task.start_time), 'ha')} -{' '}
										{format(parseTime(task.due_date, task.end_time), 'ha')}
									</>
								) : (
									<>Due: {dueDate}</>
								)}
							</span>
						</div>
					</div>
				</div>
				<div className='flex items-center -space-x-3'>
					{task.task_participants
						.filter(u => Boolean(u.profile))
						.map(({ profile }) => (
							<div key={profile.id}>
								<Image
									src={profile.avatar_path || ''}
									alt={profile.name || ''}
									width={40}
									height={40}
									className='rounded-full'
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
							{/* {task.comments.length} */} 3
						</span>
						<span className='flex items-center gap-1 text-sm'>
							<Folder
								className={isColor ? 'opacity-80' : 'opacity-50'}
								size={16}
							/>
							{/* {task.resources.length} */} 6
						</span>
						<span className='flex items-center gap-1 text-sm'>
							<LucideLink
								className={isColor ? 'opacity-80' : 'opacity-50'}
								size={16}
							/>
							{/* {task.links.length} */}2
						</span>
					</div>
					<div className='flex items-center gap-2'>
						<SubTaskCreateModal taskId={task.id} />
						<Link
							href={DashboardPages.TASK_EDIT(task.id)}
							className='border-primary text-primary hover:bg-primary/10 rounded-full border bg-white p-2 dark:border-white dark:bg-neutral-800 dark:text-white dark:hover:bg-white/10'
						>
							<Edit2 size={18} />
						</Link>
					</div>
				</div>
			)}
		</div>
	)
}
