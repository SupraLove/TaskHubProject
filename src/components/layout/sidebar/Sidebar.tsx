'use client'

import { SidebarHeading } from './SidebarHeading'
import { SidebarMenu } from './SidebarMenu'
import { SidebarProfile } from './SidebarProfile'
import { SidebarProjects } from './SidebarProjects'
import { LogOut } from 'lucide-react'
import { useRouter } from 'next/navigation'

import { Button } from '@/components/ui/button'

import { createClient } from '@/utils/supabase/client'

import { PublicPages } from '@/config/public-pages'

export const Sidebar = () => {
	const router = useRouter()

	async function signOut() {
		const { error } = await createClient().auth.signOut()
		if (!error) {
			router.push(PublicPages.LOGIN)
		}
	}
	return (
		<aside className='bg-white p-5 dark:bg-neutral-800'>
			<div className='flex items-center justify-between'>
				<SidebarHeading title='Account' />
				<Button
					variant='ghost'
					onClick={signOut}
					className='opacity-30 transition-opacity hover:opacity-100'
				>
					<LogOut />
				</Button>
			</div>
			<SidebarProfile />

			<SidebarHeading title='MainMenu' />
			<SidebarMenu />
			<SidebarHeading title='Projects' />
			<SidebarProjects />
		</aside>
	)
}
