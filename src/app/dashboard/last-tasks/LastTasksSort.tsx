import { taskStore } from '@/stores/task.store'
import { observer } from 'mobx-react-lite'

import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue
} from '@/components/ui/select'

import type { TTaskSortBy } from '@/types/last-tasks.types'

const sortTypes: Array<TTaskSortBy> = ['asc', 'desc']

export const LastTasksSort = observer(() => {
	return (
		<div>
			<Select
				defaultValue={taskStore.sortByDueDate}
				onValueChange={(value: TTaskSortBy) =>
					taskStore.setSortByDueDate(value)
				}
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
})
