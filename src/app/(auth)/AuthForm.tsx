'use client'

import { authStore } from '@/stores/auth.store'
import { AuthSchema } from '@/zod-schemes/auth.zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { observer } from 'mobx-react-lite'
import { useRouter } from 'next/navigation'
import { useEffect, useRef } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import type z from 'zod'

import { Button } from '@/components/ui/button'
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'

import { DashboardPages } from '@/config/dashboard-pages'

interface Props {
	type: 'login' | 'register' | 'reset-password' | 'forgot-password'
}

export const AuthForm = observer(({ type }: Props) => {
	const isLogin = type === 'login'
	const router = useRouter()
	const form = useForm<z.infer<typeof AuthSchema>>({
		resolver: zodResolver(AuthSchema)
	})

	const onSubmit = (data: z.infer<typeof AuthSchema>) => {
		authStore.login()
		form.reset()
		if (authStore.isLoggedIn) {
			toast.success(
				isLogin ? 'Logged in successfully' : 'Registered successfully'
			)
			router.replace(DashboardPages.DASHBOARD)
		}
	}
	return (
		<div className='bg-pattern flex h-full w-full items-center justify-center'>
			<div
				className='max-w-sm rounded-lg bg-white p-6 dark:bg-gray-800'
				onClick={e => e.stopPropagation()}
			>
				<div className='mb-6'>
					<h2 className='text-xl font-bold'>
						{isLogin ? 'Login' : 'Register'}
					</h2>

					<div className='mt-4'>
						<Form {...form}>
							<form
								onSubmit={form.handleSubmit(onSubmit)}
								className='space-y-5'
							>
								<FormField
									control={form.control}
									name='email'
									render={({ field }) => (
										<FormItem>
											<FormLabel>Email</FormLabel>
											<FormControl>
												<Input
													placeholder='Enter email: '
													type='email'
													{...field}
												/>
											</FormControl>

											<FormMessage />
										</FormItem>
									)}
								/>

								<FormField
									control={form.control}
									name='password'
									render={({ field }) => (
										<FormItem>
											<FormLabel>Password</FormLabel>
											<FormControl>
												<Input
													placeholder='Enter password: '
													type='password'
													{...field}
												/>
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
