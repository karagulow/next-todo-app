'use client';

import { useState, useEffect } from 'react';

import { Box } from '@/components/shared/box';
import { GroupTitle } from '@/components/shared/group-title';
import { TaskList } from '@/components/shared/task-list';
import { AddTask } from '@/components/shared/add-task';

import useTaskStore from '@/store/taskStore';
import { SkeletonTaskItem } from '@/components/shared/skeleton-task-item';

export default function Home() {
	const { tasks } = useTaskStore();
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const timeout = setTimeout(() => {
			setLoading(false);
		}, 0);

		return () => clearTimeout(timeout);
	}, []);

	return (
		<div className='flex flex-col gap-5 mt-5'>
			{/* Top */}
			<Box className=' py-5 px-[30px]'>
				<span className='font-bold text-[20px] text-primary text-center'>
					ToDo App
				</span>
			</Box>

			{/* Main */}
			<Box className='gap-10 p-[30px]'>
				{/* Add task */}
				<AddTask />

				{/* Tasks to do */}
				<div className='flex flex-col gap-4'>
					<GroupTitle
						title='Tasks to do'
						count={loading ? 0 : tasks.filter(task => !task.completed).length}
					/>

					{loading ? (
						<div className='flex flex-col gap-[10px] w-full'>
							{Array(3)
								.fill(null)
								.map((_, index) => (
									<SkeletonTaskItem key={index} />
								))}
						</div>
					) : (
						<TaskList tasks={tasks.filter(task => !task.completed)} />
					)}
				</div>

				{/* Done tasks */}
				<div className='flex flex-col gap-4'>
					<GroupTitle
						title='Done'
						count={loading ? 0 : tasks.filter(task => task.completed).length}
					/>

					{loading ? (
						<div className='flex flex-col gap-[10px] w-full'>
							{Array(3)
								.fill(null)
								.map((_, index) => (
									<SkeletonTaskItem key={index} />
								))}
						</div>
					) : (
						<TaskList tasks={tasks.filter(task => task.completed)} />
					)}
				</div>
			</Box>
		</div>
	);
}
