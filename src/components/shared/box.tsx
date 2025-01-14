import { cn } from '@/lib/utils';
import React from 'react';

interface Props {
	className?: string;
}

export const Box: React.FC<React.PropsWithChildren<Props>> = ({
	className,
	children,
}) => {
	return (
		<div className={cn('flex flex-col w-full bg-block rounded-lg', className)}>
			{children}
		</div>
	);
};
