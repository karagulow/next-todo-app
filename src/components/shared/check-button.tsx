import React from 'react';

interface Props {
	onClick: () => void;
}

export const CheckButton: React.FC<Props> = ({ onClick }) => {
	return (
		<button
			className='flex items-center justify-center size-6 group'
			onClick={onClick}
			type='button'
		>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				fill='none'
				viewBox='0 0 24 24'
				strokeWidth={1.5}
				stroke='currentColor'
				className='size-5 text-gray-400 group-hover:text-green-300 transition-colors duration-200'
			>
				<path
					strokeLinecap='round'
					strokeLinejoin='round'
					d='M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
				/>
			</svg>
		</button>
	);
};
