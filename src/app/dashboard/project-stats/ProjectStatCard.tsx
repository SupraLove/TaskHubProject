import type { IProjectStat } from './project-stats.types'
import Image from 'next/image'

import { cn } from '@/utils/cn'
import { formatMinutes } from '@/utils/format-minutes'

interface Props {
	projectStat: IProjectStat
}

export function ProjectStatCard({ projectStat }: Props) {
	return (
		<div
			className={cn(
				projectStat.bgColor,
				'relative overflow-hidden rounded-2xl p-6'
			)}
		>
			<div className='relative z-10 flex items-center justify-between'>
				<div className='flex flex-col items-start'>
					<span className='mb-1 text-3xl font-semibold text-neutral-800'>
						{projectStat.id === 3
							? formatMinutes(projectStat.number)
							: projectStat.number}
					</span>
					<span className='text-sm text-neutral-800'>{projectStat.label}</span>
				</div>
				<div className='ml-4 flex-shrink-0'>
					<Image
						src={projectStat.icon}
						alt={projectStat.label}
						width={80}
						height={80}
					/>
				</div>
			</div>
		</div>
	)
}
