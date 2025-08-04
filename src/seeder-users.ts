'use server'

import { USERS } from './app/dashboard/users.data'
import { createAdminClient } from './utils/supabase/server'

export async function seedAuthUsers() {
	const supabase = createAdminClient()

	// const users = await supabase.auth.admin.listUsers()

	// for (const user of users.data.users) {
	// 	await supabase.auth.admin.deleteUser(user.id)
	// }

	for (const user of USERS) {
		console.log('➡️ Trying to create user:', user.email)

		const { data, error } = await supabase.auth.admin.createUser({
			id: user.id,
			email: user.email,
			password: '123456!'
		})

		if (error) {
			console.error(`Error for ${user.email}:`, error.message)
		}
	}
}
