import { redirect } from 'next/navigation'
import type { ReactNode } from 'react'

import { Sidebar } from '@/components/layout/sidebar/Sidebar'

import { getServerAuth } from '@/utils/supabase/get-server-auth'

import { PublicPages } from '@/config/public-pages'

interface Props {
	children: ReactNode
	modals: ReactNode
}

export default async function DashboardLayout({ children, modals }: Props) {
	const user = await getServerAuth()

	if (!user) {
		redirect(PublicPages.LOGIN)
	}
	return (
		<div className='grid min-h-screen grid-cols-[240px_1fr]'>
			<Sidebar />
			<main className='p-5'>{children}</main>
			{modals}
		</div>
	)
}
