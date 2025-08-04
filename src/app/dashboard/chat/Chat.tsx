import { USERS } from '../users.data'
import { Paperclip, Send } from 'lucide-react'
import Image from 'next/image'

import { cn } from '@/utils/cn'

const messages = [
	{
		id: 1,
		text: "Morning! I've been working on the design elements",
		author: USERS[3],
		own: false,
		time: '09:28 am'
	},
	{
		id: 2,
		text: "That's great to hear! I've been focusing on market research",
		author: USERS[6],
		own: true,
		time: '09:32 am'
	},
	{
		id: 3,
		text: "Morning! I've been working on the",
		author: USERS[4],
		own: false,
		time: '09:47 am'
	}
]

export function Chat() {
	return (
		<div className='flex h-screen flex-col'>
			<Image
				src='/images/bg-chat.jpeg'
				alt='Chat'
				width={351}
				height={527}
				className='chat-header-image flex-shrink-0'
			/>
			<div className='flex min-h-0 flex-1 flex-col'>
				<div className='bg-primary flex items-center gap-3 p-3'>
					<Image
						src={USERS[2].avatarPath || ''}
						alt='ChatOwner'
						width={32}
						height={32}
						className='rounded-full'
					/>
					<div className='leading-snug'>
						<div className='text-ring font-medium'>{USERS[2].name}</div>
						<div className='text-ring text-xs font-medium opacity-60'>
							Project Manager
						</div>
					</div>
				</div>
				<div className='text-ring flex-1 overflow-y-auto bg-[#6d5dc5] p-3'>
					<div className='flex flex-col gap-3'>
						{' '}
						{messages.map(message => (
							<div
								key={message.id}
								className={cn(
									'flex items-end gap-2',
									message.own ? 'justify-end' : 'justify-start'
								)}
							>
								{!message.own && (
									<Image
										src={message.author.avatarPath || ''}
										alt={message.author.name}
										width={32}
										height={32}
										className='rounded-full'
									/>
								)}
								<div className='max-w-[75%]'>
									<div className='text-sx mb-0.5 text-gray-300'>
										{message.own ? (
											<span className='space-x-1 pl-2 text-sm'>
												<span className='opacity-60'>{message.time} </span>
												<span className='font-semibold text-gray-100'>Me</span>
											</span>
										) : (
											<span className='space-x-1 pl-2 text-sm'>
												<span className='font-semibold text-gray-100'>
													{message.author.name}
												</span>{' '}
												<span className='opacity-60'>{message.time} </span>
											</span>
										)}
									</div>

									<div
										className={cn(
											'text-ring rounded-xl px-4 py-2 text-sm',
											message.own
												? 'rounded-br-none bg-[#5f4cca]'
												: 'rounded-bl-none bg-[#8170e6]'
										)}
									>
										{message.text}
									</div>
								</div>

								{message.own && (
									<Image
										src={message.author.avatarPath || ''}
										alt={message.author.name}
										width={32}
										height={32}
										className='rounded-full'
									/>
								)}
							</div>
						))}
					</div>
				</div>

				<div className='bg-primary flex items-center gap-3 p-2.5'>
					<button className='text-ring hover:bg-ring/20 rounded-full p-1.5'>
						<Paperclip size={24} />
					</button>
					<input
						type='text'
						placeholder='Type your message...'
						className='text-ring w-full bg-transparent placeholder:text-[#B2AEDF] focus:outline-none'
					/>
					<button className='text-ring hover:bg-ring/20 rounded-full p-1.5'>
						<Send size={26} />
					</button>
				</div>
			</div>
		</div>
	)
}
