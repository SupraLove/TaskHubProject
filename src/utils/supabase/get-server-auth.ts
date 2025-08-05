import { createClientFromServer } from './server'
import { redirect } from 'next/navigation'

import { PublicPages } from '@/config/public-pages'

export async function getServerAuth(isNeedRedirect = false) {
	const supabase = await createClientFromServer()
	const { data, error } = await supabase.auth.getUser()
	console.log('getServerAuth', data, error)

	if (error || !data?.user) {
		return isNeedRedirect ? redirect(PublicPages.LOGIN) : null
	}

	return data.user
}
