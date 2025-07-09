import { Button } from '@/components/ui/button'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'

import { cn } from '@/utils/cn'

import type { TTaskStatus } from '@/types/last-tasks.types'

interface Props {
	status: TTaskStatus | null
	setStatus: (status: TTaskStatus | null) => void
}

const statuses: Array<TTaskStatus | 'all'> = [
	'all',
	'not-started',
	'in-progress',
	'completed'
]

export function LastTasksFilter({ status, setStatus }: Props) {
	return (
		<div>
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Button
						variant='default'
						className='capitalize'
					>
						{status?.replace('-', '') || 'All'}
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent align='end'>
					{statuses.map(s => (
						<DropdownMenuItem
							key={s}
							onClick={() => setStatus(s === 'all' ? null : s)}
							className={cn(
								status === s ? 'font-bold' : '',
								'cursor-pointer capitalize'
							)}
						>
							{s.replace('-', ' ')}
						</DropdownMenuItem>
					))}
				</DropdownMenuContent>
			</DropdownMenu>
		</div>
	)
}
