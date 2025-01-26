'use client';

import { useTheme } from 'next-themes';

import { Box } from '@/components/shared/box';
import { GroupTitle } from '@/components/shared/group-title';
import { TaskList } from '@/components/shared/task-list';
import { AddTask } from '@/components/shared/add-task';
import { SkeletonTaskItem } from '@/components/shared/skeleton-task-item';

import useTaskStore from '@/store/taskStore';

export default function Home() {
	const { tasks } = useTaskStore();

	const { theme, setTheme } = useTheme();

	return (
		<div className='flex flex-col gap-5 mt-5'>
			{/* Top */}
			<Box className='flex flex-row justify-between items-center py-5 px-[30px]'>
				<span className='font-bold text-[20px] text-primary text-center'>
					ToDo App
				</span>
				<button
					className='px-4 py-2 text-sm font-medium rounded-lg bg-primary text-background hover:bg-secondary duration-200'
					onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
				>
					Change theme
				</button>
			</Box>

			{/* Main */}
			<Box className='gap-10 p-[30px]'>
				{/* Add task */}
				<AddTask />

				{/* Tasks to do */}
				<div className='flex flex-col gap-4'>
					<GroupTitle
						title='Tasks to do'
						count={tasks.filter(task => !task.completed).length}
					/>

					<TaskList tasks={tasks.filter(task => !task.completed)} />
				</div>

				{/* Done tasks */}
				<div className='flex flex-col gap-4'>
					<GroupTitle
						title='Done'
						count={tasks.filter(task => task.completed).length}
					/>

					<TaskList tasks={tasks.filter(task => task.completed)} />
				</div>
			</Box>
		</div>
	);
}
