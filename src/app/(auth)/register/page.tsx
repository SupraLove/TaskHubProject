import { AuthForm } from '../AuthForm'
import { NO_INDEX_PAGE } from '@/constants/seo.constants'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Register',
	...NO_INDEX_PAGE
}

export default function Page() {
	return <AuthForm type='register' />
}
