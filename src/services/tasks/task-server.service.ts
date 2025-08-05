'use server'

import { createClientFromServer } from '@/utils/supabase/server'

// Получение всех задач
export async function getServerTasks() {
	const client = await createClientFromServer()
	return client
		.from('task')
		.select('*, sub_task(*), task_participants(profile(*))')
}

export async function getServerTodayTask() {
	const client = await createClientFromServer()
	return client
		.from('task')
		.select('*, sub_task(*), task_participants(profile(*))')
		.eq('due_date', new Date().toISOString().split('T')[0])
}
