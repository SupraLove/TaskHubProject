import type { Database } from './database.types'

export type TSubTask = Database['public']['Tables']['sub_task']['Row']
export type TTask = Database['public']['Tables']['task']['Row'] & {
	sub_task?: TSubTask[]
}

export type TTaskStatus = 'not-started' | 'in-progress' | 'completed'
export type TTaskSortBy = 'asc' | 'desc'

export type TTaskFormData = Pick<TTask, 'title' | 'icon' | 'due_date'>
export type TSubTaskFormData = Pick<TSubTask, 'title'>
