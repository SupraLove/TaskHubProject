import { isToday } from 'date-fns'
import { makeAutoObservable } from 'mobx'

import type {
	TGetTasksResponse,
	TSubTaskFormData,
	TTask,
	TTaskFormData,
	TTaskSortBy,
	TTaskStatus
} from '@/types/last-tasks.types'

class TaskStore {
	tasks: TGetTasksResponse = []
	status: TTaskStatus | null = null
	sortByDueDate: TTaskSortBy = 'asc'

	constructor() {
		makeAutoObservable(this)
	}

	loadStoreFromServer(tasks: TGetTasksResponse): void {
		this.tasks = tasks
	}

	get TodayTasks() {
		return this.tasks.filter(task => {
			const taskDate = new Date(task.due_date)
			return isToday(taskDate) && task.start_time && task.end_time
		}) as TGetTasksResponse
	}

	getTaskById(id: string): TGetTasksResponse[0] | undefined {
		return this.tasks.find(task => task.id === id)
	}

	updateTask(id: string, updateTask: TTaskFormData): void {
		const taskIndex = this.tasks.findIndex(task => task.id === id)
		if (taskIndex === -1) return

		this.tasks[taskIndex] = { ...this.tasks[taskIndex], ...updateTask }
	}

	addSubTask(taskId: string, subTasks: TSubTaskFormData): void {
		const task = this.getTaskById(taskId)
		if (!task) return

		if (!task.sub_task) {
			task.sub_task = []
		}

		// task.sub_task.push({
		// 	id: crypto.randomUUID(),
		// 	title: subTasks.title,
		// 	is_completed: false
		// })
	}

	setStatus(status: TTaskStatus | null): void {
		this.status = status
	}

	setSortByDueDate(sortBy: TTaskSortBy): void {
		this.sortByDueDate = sortBy
	}

	get filteredTasks(): TTask[] {
		let filtered = this.tasks

		if (this.status) {
			filtered = filtered.filter(task => {
				switch (this.status) {
					case 'not-started':
						return task?.sub_task?.every(subTask => !subTask.is_completed)
					case 'in-progress':
						return (
							task?.sub_task?.some(subTask => !subTask.is_completed) &&
							task?.sub_task?.some(subTask => subTask.is_completed)
						)
					case 'completed':
						return task?.sub_task?.every(subTask => subTask.is_completed)
					default:
						return true
				}
			})
		}

		return filtered.slice().sort((a, b) => {
			const dateA = new Date(a.due_date).getTime()
			const dateB = new Date(b.due_date).getTime()

			if (this.sortByDueDate === 'asc') {
				return dateA - dateB
			} else {
				return dateB - dateA
			}
		})
	}
}
export const taskStore = new TaskStore()
