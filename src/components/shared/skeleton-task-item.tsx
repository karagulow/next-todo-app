import React from 'react';
import { cn } from '@/lib/utils';

interface Props {
	className?: string;
}

export const SkeletonTaskItem: React.FC<React.PropsWithChildren<Props>> = ({
	className,
}) => {
	return (
		<div
			className={cn(
				'flex flex-row justify-between items-center w-full bg-input rounded-md p-[16px]',
				className
			)}
		>
			<div className='flex flex-row items-center gap-[10px] w-full animate-pulse'>
				<div className='size-6 bg-placeholder rounded-[6px]'></div>
				<div className='h-[16px] bg-placeholder rounded w-full max-w-[200px]'></div>
			</div>
		</div>
	);
};
