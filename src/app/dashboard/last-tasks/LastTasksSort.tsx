import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue
} from '@/components/ui/select'

import type { TTaskSortBy } from '@/types/last-tasks.types'

interface Props {
	sortByDueDate: TTaskSortBy
	setSortByDueDate: (value: TTaskSortBy) => void
}

const sortTypes: Array<TTaskSortBy> = ['asc', 'desc']

export function LastTasksSort({ sortByDueDate, setSortByDueDate }: Props) {
	return (
		<div>
			<Select
				defaultValue={sortByDueDate}
				onValueChange={setSortByDueDate}
			>
				<SelectTrigger className='w-full'>
					<SelectValue placeholder='Sort by due date' />
				</SelectTrigger>
				<SelectContent>
					{sortTypes.map(sortType => (
						<SelectItem
							key={sortType}
							value={sortType}
						>
							{sortType === 'asc' ? 'Ascending' : 'Descending'}
						</SelectItem>
					))}
				</SelectContent>
			</Select>
		</div>
	)
}
