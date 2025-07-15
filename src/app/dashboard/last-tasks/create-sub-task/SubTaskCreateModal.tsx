import { taskStore } from '@/stores/task.store'
import { Plus } from 'lucide-react'
import { observer } from 'mobx-react-lite'
import { useState } from 'react'
import { toast } from 'sonner'

import { Button } from '@/components/ui/button'
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'

interface Props {
	taskId: string
}

export const SubTaskCreateModal = observer(({ taskId }: Props) => {
	const [title, setTitle] = useState('')
	const [isOpenModal, setIsOpenModal] = useState(false)

	const handleAdd = () => {
		if (!title.trim()) {
			toast.error('Subtask cannot to be empty', {
				id: 'subtask--emty-title'
			})
			return
		}

		taskStore.addSubTask(taskId, { title })
		toast.success('Subtask added successfully')
		setTitle('')
		setIsOpenModal(false)
	}

	return (
		<Dialog
			open={isOpenModal}
			onOpenChange={setIsOpenModal}
		>
			<DialogTrigger className='bg-primary hover:bg-primary/90 rounded-full p-2 text-white transition-colors'>
				<Plus size={18} />
			</DialogTrigger>
			<DialogContent className='!max-w-sm'>
				<DialogHeader>
					<DialogTitle className='mb-4'>Create a sub task</DialogTitle>
					<DialogDescription>
						<Input
							placeholder='Subtask title'
							value={title}
							onChange={e => setTitle(e.target.value)}
							className='mb-4'
						/>
						<Button onClick={handleAdd}>Add Subtask</Button>
					</DialogDescription>
				</DialogHeader>
			</DialogContent>
		</Dialog>
	)
})
