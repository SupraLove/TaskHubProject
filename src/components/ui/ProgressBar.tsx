import { CheckCircle } from 'lucide-react'
import { useMemo } from 'react'

import { cn } from '@/utils/cn'

interface Props {
	progress: number
}

export function ProgressBar({ progress }: Props) {
	const clamped = Math.min(100, Math.max(0, progress))

	const progressText = useMemo(() => {
		if (clamped >= 100)
			return (
				<>
					<CheckCircle className='mr-1.5' />
					Done
				</>
			)
		return `${clamped}%`
	}, [clamped])

	const colorProgressBar = useMemo(() => {
		if (clamped >= 100) return 'bg-emerald-500'
		if (clamped >= 75) return 'bg-amber-400'
		if (clamped >= 50) return 'bg-primary'
		if (clamped >= 25) return 'bg-rose-400'
		return 'bg-neutral-300'
	}, [clamped])

	return (
		<div className='bg-primary/10 relative h-12 w-full overflow-hidden rounded-full'>
			<div
				className={cn(
					'animate-stripes flex h-full cursor-default items-center justify-center rounded-full bg-[length:56px_56px] font-medium text-white',
					colorProgressBar
				)}
				style={{
					width: `${clamped}%`,
					backgroundImage:
						'repeating-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 0, rgba(255, 255, 255, 0.15) 20px, transparent 20px, transparent 40px)'
				}}
			>
				{progressText}
			</div>
		</div>
	)
}
