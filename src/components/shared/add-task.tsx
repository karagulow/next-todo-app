'use client';

import React, { useState } from 'react';
import useTaskStore from '@/store/taskStore';

interface Props {
	className?: string;
}

export const AddTask: React.FC<Props> = () => {
	const { addTask } = useTaskStore();

	const [taskText, setTaskText] = useState('');

	const handleAddTask = () => {
		if (taskText.trim() === '') return;
		addTask(taskText);
		setTaskText('');
	};

	const handleKeyDown = (e: React.KeyboardEvent) => {
		if (e.key === 'Enter') {
			handleAddTask(); // Добавляем задачу при нажатии Enter
		}
	};

	return (
		<div className='flex flex-row items-center gap-[10px] w-full'>
			<input
				className='w-full h-[40px] rounded-sm bg-input border-[2px] border-border px-4 text-[16px] font-medium text-primary placeholder:text-placeholder outline-none'
				type='text'
				placeholder='Add new task...'
				value={taskText}
				onChange={e => setTaskText(e.target.value)}
				onKeyDown={handleKeyDown}
			/>
			<button
				className='flex justify-center items-center size-10 min-h-10 min-w-10 rounded-sm bg-primary hover:bg-secondary duration-200'
				type='button'
				onClick={handleAddTask}
			>
				<svg
					width='32'
					height='32'
					viewBox='0 0 32 32'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						className='fill-input'
						d='M28 16C28 16.2652 27.8946 16.5196 27.7071 16.7071C27.5196 16.8946 27.2652 17 27 17H17V27C17 27.2652 16.8946 27.5196 16.7071 27.7071C16.5196 27.8946 16.2652 28 16 28C15.7348 28 15.4804 27.8946 15.2929 27.7071C15.1054 27.5196 15 27.2652 15 27V17H5C4.73478 17 4.48043 16.8946 4.29289 16.7071C4.10536 16.5196 4 16.2652 4 16C4 15.7348 4.10536 15.4804 4.29289 15.2929C4.48043 15.1054 4.73478 15 5 15H15V5C15 4.73478 15.1054 4.48043 15.2929 4.29289C15.4804 4.10536 15.7348 4 16 4C16.2652 4 16.5196 4.10536 16.7071 4.29289C16.8946 4.48043 17 4.73478 17 5V15H27C27.2652 15 27.5196 15.1054 27.7071 15.2929C27.8946 15.4804 28 15.7348 28 16Z'
						fill='#FAFAFA'
					/>
				</svg>
			</button>
		</div>
	);
};
