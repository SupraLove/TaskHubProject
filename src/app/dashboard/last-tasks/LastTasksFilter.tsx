import { taskStore } from '@/stores/task.store'
import { observer } from 'mobx-react-lite'

import { Button } from '@/components/ui/button'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'

import { cn } from '@/utils/cn'

import type { TTaskStatus } from '@/types/last-tasks.types'

const statuses: Array<TTaskStatus | 'all'> = [
	'all',
	'not-started',
	'in-progress',
	'completed'
]

export const LastTasksFilter = observer(() => {
	const currentStatus = taskStore.status
	return (
		<div>
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Button
						variant='default'
						className='capitalize'
					>
						{currentStatus?.replace('-', '') || 'All'}
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent align='end'>
					{statuses.map(s => (
						<DropdownMenuItem
							key={s}
							onClick={() => taskStore.setStatus(s === 'all' ? null : s)}
							className={cn(
								currentStatus === s ? 'font-bold' : '',
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
})
