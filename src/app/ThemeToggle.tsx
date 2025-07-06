'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

export function ThemeToggle() {
	const { theme, setTheme } = useTheme()
	return (
		<div className='fixed right-10 bottom-10 z-50 mt-3'>
			<button
				className='rounded-full bg-neutral-200 p-2 text-neutral-800 transition-colors hover:bg-neutral-200 dark:bg-neutral-700 dark:text-white dark:hover:bg-neutral-700'
				onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
			>
				{theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
			</button>
		</div>
	)
}
