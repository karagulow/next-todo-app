import React from 'react';
import { cn } from '@/lib/utils';
import { TaskItem } from './task-item';

interface Props {
	className?: string;
	tasks: { id: number; text: string; completed: boolean }[];
}

export const TaskList: React.FC<React.PropsWithChildren<Props>> = ({
	className,
	tasks,
}) => {
	return (
		<ul className={cn('flex flex-col gap-[10px] w-full', className)}>
			{tasks.map((task, index) => (
				<TaskItem key={index} task={task} />
			))}
		</ul>
	);
};
