import { USERS } from '../users.data'
import { setHours, setMinutes } from 'date-fns'

import type { ITask } from '@/types/last-tasks.types'

export const TASKS: ITask[] = [
	{
		id: '1',
		title: 'Travel App User Flow',
		icon: 'Plane',
		dueDate: {
			date: new Date(),
			startTime: setMinutes(setHours(new Date(), 9), 50),
			endTime: setMinutes(setHours(new Date(), 12), 10)
		},
		comments: ['this is comment', 'another comment', 'next comment'],
		resources: ['', '', '', '', '', ''],
		links: ['https://example.com', 'https://example.org'],
		users: [USERS[0], USERS[1], USERS[2]],
		subTasks: [
			{
				id: '1',
				title: 'Create wireFrames',
				isCompleted: true
			},
			{
				id: '2',
				title: 'Design UI components',
				isCompleted: true
			},
			{
				id: '3',
				title: 'Implement user flow',
				isCompleted: false
			},
			{
				id: '4',
				title: 'test user flow',
				isCompleted: false
			}
		]
	},
	{
		id: '2',
		title: 'E-commerce site redesign',
		icon: 'ShoppingBasket',
		dueDate: {
			date: new Date(),
			startTime: setMinutes(setHours(new Date(), 13), 0),
			endTime: setMinutes(setHours(new Date(), 15), 30)
		},
		comments: ['this is comment', 'another comment', 'next comment'],
		resources: ['', '', '', '', '', ''],
		links: ['https://example.com', 'https://example.org'],
		users: [USERS[2], USERS[4], USERS[5]],
		subTasks: [
			{
				id: '1',
				title: 'Create wireFrames',
				isCompleted: true
			}
		]
	},
	{
		id: '3',
		title: 'Mobile app feature update',
		icon: 'TabletSmartphone',
		dueDate: {
			date: new Date(new Date().getTime() + 3 * 24 * 60 * 60 * 1000)
		},
		comments: ['this is comment', 'another comment', 'next comment'],
		resources: ['', '', '', ''],
		links: ['https://example.com'],
		users: [USERS[1], USERS[0], USERS[3]],
		subTasks: [
			{
				id: '1',
				title: 'Create wireFrames',
				isCompleted: true
			},
			{
				id: '2',
				title: 'Create wireFrames',
				isCompleted: true
			},
			{
				id: '3',
				title: 'Create wireFrames',
				isCompleted: true
			},
			{
				id: '4',
				title: 'Create wireFrames',
				isCompleted: false
			}
		]
	}
]
