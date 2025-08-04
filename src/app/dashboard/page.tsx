import { Dashboard } from './Dashboard'
import { taskServerGetAll } from '@/services/tasks/task-server.service'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Dashboard'
}

export default async function Page() {
	const tasks = await taskServerGetAll()

	if (tasks.error) {
		return <div className='text-red-500'>Error loading tasks</div>
	}

	return <Dashboard tasks={tasks.data} />
}
