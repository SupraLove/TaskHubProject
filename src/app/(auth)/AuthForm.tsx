'use client'

import { signInWithEmail } from './actions'
import { AuthSchema } from '@/zod-schemes/auth.zod'
import { zodResolver } from '@hookform/resolvers/zod'
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

export const AuthForm = () => {
	const form = useForm<z.infer<typeof AuthSchema>>({
		resolver: zodResolver(AuthSchema)
	})

	const onSubmit = (data: z.infer<typeof AuthSchema>) => {
		// authStore.login()
		signInWithEmail({ email: data.email })
			.then(() => {
				toast.success(
					'Link to sign in has been sent to your email. Please check your box'
				)
			})
			.catch(error => {
				toast.error(`Error: ${error.message || 'Something went wrong'}`)
			})
			.finally(() => {
				form.reset()
			})
	}
	return (
		<div className='bg-pattern flex min-h-screen w-full items-center justify-center'>
			<div
				className='max-w-sm rounded-lg bg-white p-6 dark:bg-gray-800'
				onClick={e => e.stopPropagation()}
			>
				<div className='mb-6'>
					<h2 className='text-xl font-bold'>Sign in link</h2>

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

								<Button type='submit'>Send link</Button>
							</form>
						</Form>
					</div>
				</div>
			</div>
		</div>
	)
}
