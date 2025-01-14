import { cn } from '@/lib/utils';
import React from 'react';

interface Props {
	className?: string;
	title: string;
	count: number;
}

export const GroupTitle: React.FC<React.PropsWithChildren<Props>> = ({
	className,
	title,
	count,
}) => {
	return (
		<div className={cn('font-medium text-[16px] text-secondary', className)}>
			{title} - {count}
		</div>
	);
};
