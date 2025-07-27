import { z } from 'zod'

export const AuthSchema = z.object({
	email: z
		.string()
		.min(1, 'Email is required')
		.pipe(z.email('Invalid email format'))
})
