import type { ReactNode } from 'react'

import { Sidebar } from '@/components/layout/sidebar/Sidebar'

import { getServerAuth } from '@/utils/supabase/get-server-auth'

interface Props {
	children: ReactNode
	modals: ReactNode
}

export default async function DashboardLayout({ children, modals }: Props) {
	await getServerAuth(true)

	return (
		<div className='grid min-h-screen grid-cols-[240px_1fr]'>
			<Sidebar />
			<main>{children}</main>
			{modals}
		</div>
	)
}
