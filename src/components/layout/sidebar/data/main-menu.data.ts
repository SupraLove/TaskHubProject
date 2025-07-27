import type { IMenuItem } from '../menu/menu.types'
import {
	CalendarDays,
	ChartNoAxesColumn,
	LayoutGrid,
	MessageCircleMore,
	NotebookText,
	Settings,
	UsersRound
} from 'lucide-react'

import { DashboardPages } from '@/config/dashboard-pages'

export const MAIN_MENU: IMenuItem[] = [
	{
		icon: LayoutGrid,
		label: 'Dashboard',
		href: DashboardPages.DASHBOARD
	},
	{
		icon: MessageCircleMore,
		label: 'Message',
		href: DashboardPages.MESSAGE
	},
	{
		icon: ChartNoAxesColumn,
		label: 'Insight',
		href: DashboardPages.INSIGHT
	},
	{
		icon: UsersRound,
		label: 'Team',
		href: DashboardPages.TEAM
	},
	{
		icon: CalendarDays,
		label: 'Dashboard',
		href: DashboardPages.SCHEDULE
	},
	{
		icon: NotebookText,
		label: 'Dashboard',
		href: DashboardPages.REPORT
	},
	{
		icon: Settings,
		label: 'Dashboard',
		href: DashboardPages.SETTINGS
	}
]
