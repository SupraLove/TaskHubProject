'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClientFromServer } from '@/utils/supabase/server'

export async function signInWithEmail({ email }: { email: string }) {
	const supabase = await createClientFromServer()

	return supabase.auth.signInWithOtp({
		email,
		options: {
			shouldCreateUser: true
		}
	})
}
