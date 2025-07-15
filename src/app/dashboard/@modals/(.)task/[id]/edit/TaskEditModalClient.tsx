'use client'

import { taskStore } from '@/stores/task.store'
import { TaskSchema } from '@/zod-schemes/task.zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { format } from 'date-fns'
import { CalendarIcon } from 'lucide-react'
import { observer } from 'mobx-react-lite'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { toast } from 'sonner'

import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import {
	Popover,
	PopoverContent,
	PopoverTrigger
} from '@/components/ui/popover'

import { ICON_MAP, ICON_NAMES } from '@/utils/icon-map'

import type { TTaskFormData } from '@/types/last-tasks.types'

interface Props {
	id: string
}

export const TaskEditModalClient = observer(({ id }: Props) => {
	const router = useRouter()

	const closeModal = () => {
		router.back()
	}

	useEffect(() => {
		const handleEscape = (event: KeyboardEvent) => {
			if (event.key === 'Escape') {
				closeModal()
			}
		}

		document.addEventListener('keydown', handleEscape)
		return () => document.removeEventListener('keydown', handleEscape)
	}, [])

	const form = useForm<TTaskFormData>({
		resolver: zodResolver(TaskSchema)
	})

	useEffect(() => {
		const task = taskStore.getTaskById(id)
		if (!task) return
		form.reset({
			title: task.title,
			dueDate: new Date(task.dueDate),
			icon: task.icon
		})
	}, [id])

	const onSubmit = (data: TTaskFormData) => {
		taskStore.updateTask(id, data)
		toast.success('Task updated successfully')
		closeModal()
	}

	return (
		<div
			className='fixed inset-0 z-50 flex items-center justify-center bg-black/50'
			onClick={closeModal}
		>
			<div
				className='mx-4 max-h-[90vh] w-full max-w-sm overflow-y-auto rounded-lg bg-white p-6 dark:bg-gray-800'
				onClick={e => e.stopPropagation()}
			>
				<div className='mb-6'>
					<div className='flex items-center justify-between'>
						<h2 className='text-xl font-bold'>Edit Task {id}</h2>
						<button onClick={closeModal}>×</button>
					</div>

					<div className='mt-4'>
						<Form {...form}>
							<form
								onSubmit={form.handleSubmit(onSubmit)}
								className='space-y-8'
							>
								<FormField
									control={form.control}
									name='title'
									render={({ field }) => (
										<FormItem>
											<FormLabel>Title</FormLabel>
											<FormControl>
												<Input
													placeholder='Enter title: '
													{...field}
												/>
											</FormControl>

											<FormMessage />
										</FormItem>
									)}
								/>
								<Controller
									control={form.control}
									name='dueDate'
									render={({ field: { onChange, value } }) => (
										<FormItem>
											<FormLabel>DueDate</FormLabel>
											<FormControl>
												<Popover>
													<PopoverTrigger asChild>
														<Button
															variant='outline'
															data-empty={!value}
															className='data-[empty=true]:text-muted-foreground w-full justify-start text-left font-normal'
														>
															<CalendarIcon />
															{value ? (
																format(value, 'PPP')
															) : (
																<span>Pick a date</span>
															)}
														</Button>
													</PopoverTrigger>
													<PopoverContent className='w-auto p-0'>
														<Calendar
															mode='single'
															selected={value}
															onSelect={onChange}
														/>
													</PopoverContent>
												</Popover>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>

								<Controller
									control={form.control}
									name='icon'
									render={({ field: { onChange, value } }) => (
										<FormItem>
											<FormLabel>Icon</FormLabel>
											<FormControl>
												<div className='flex flex-wrap gap-2'>
													{ICON_NAMES.map(name => {
														const Icon = ICON_MAP[name]
														return (
															<Button
																type='button'
																key={name}
																variant={value === name ? 'default' : 'outline'}
																onClick={() => onChange(name)}
																className='h-10 w-10 p-0'
															>
																<Icon size={18} />
															</Button>
														)
													})}
												</div>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>

								<Button type='submit'>Save</Button>
							</form>
						</Form>
					</div>
				</div>
			</div>
		</div>
	)
})
