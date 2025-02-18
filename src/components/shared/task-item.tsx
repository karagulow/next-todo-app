import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Checkbox } from './checkbox';
import { DeleteButton } from './delete-button';
import { EditButton } from './edit-button';
import useTaskStore from '@/store/taskStore';
import { CheckButton } from './check-button';

interface Props {
	className?: string;
	task: { id: number; text: string; completed: boolean };
}

export const TaskItem: React.FC<React.PropsWithChildren<Props>> = ({
	className,
	task,
}) => {
	const { toggleTask, deleteTask, editTask, setEditingTask, editingTaskId } =
		useTaskStore();
	const isEditing = editingTaskId === task.id;
	const [newText, setNewText] = useState(task.text);

	const handleEdit = () => {
		editTask(task.id, newText);
		setEditingTask(null);
	};

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
				{isEditing ? (
					<input
						type='text'
						value={newText}
						onChange={e => setNewText(e.target.value)}
						className='bg-transparent w-full outline-none'
					/>
				) : (
					<span
						className={cn(
							'font-medium text-[16px] text-primary',
							task.completed && 'line-through text-placeholder'
						)}
					>
						{task.text}
					</span>
				)}
			</div>

			<div className='flex items-center gap-2'>
				{isEditing ? (
					<CheckButton onClick={handleEdit} />
				) : (
					<EditButton onClick={() => setEditingTask(task.id)} />
				)}
				<DeleteButton onClick={() => deleteTask(task.id)} />
			</div>
		</li>
	);
};
