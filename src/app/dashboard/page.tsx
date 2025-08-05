import { Dashboard } from './Dashboard'
import {
	getServerTasks,
	getServerTodayTask
} from '@/services/tasks/task-server.service'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Dashboard'
}

export default async function Page() {
	const [tasks, todayTasks] = await Promise.all([
		getServerTasks(),
		getServerTodayTask()
	])

	return (
		<Dashboard
			tasks={tasks.data || []}
			todayTasks={todayTasks.data || []}
		/>
	)
}
