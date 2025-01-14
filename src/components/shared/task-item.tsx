import React from 'react';
import { cn } from '@/lib/utils';
import { Checkbox } from './checkbox';
import { DeleteButton } from './delete-button';
import useTaskStore from '@/store/taskStore';

interface Props {
	className?: string;
	task: { id: number; text: string; completed: boolean };
}

export const TaskItem: React.FC<React.PropsWithChildren<Props>> = ({
	className,
	task,
}) => {
	const { toggleTask, deleteTask } = useTaskStore();

	return (
		<li
			className={cn(
				'flex flex-row justify-between gap-[10px] items-center w-full bg-input rounded-md p-[16px]',
				className
			)}
			key={task.id}
		>
			<div className='flex flex-row gap-[10px]'>
				<Checkbox
					checked={task.completed}
					onChange={() => toggleTask(task.id)}
				/>
				<span
					className={cn(
						'font-medium text-[16px] text-primary',
						task.completed && 'line-through text-placeholder'
					)}
				>
					{task.text}
				</span>
			</div>

			<div className='flex justify-center items-center'>
				<DeleteButton onClick={() => deleteTask(task.id)} />
			</div>
		</li>
	);
};
