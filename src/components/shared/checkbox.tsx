import React from 'react';

interface CheckboxProps {
	checked: boolean;
	onChange: () => void;
}

export const Checkbox: React.FC<CheckboxProps> = ({ checked, onChange }) => {
	return (
		<label
			className='flex items-center justify-center cursor-pointer size-6 min-h-6 min-w-6 rounded-[6px] border-border border-[2px] group transition-colors'
			onClick={onChange}
		>
			<svg
				className={`opacity-0 group-hover:opacity-100 ${
					checked ? 'opacity-100' : ''
				} transition-opacity duration-200`}
				width='12'
				height='10'
				viewBox='0 0 12 10'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					className='stroke-border'
					d='M1.5 5.7L4.07143 8.5L10.5 1.5'
					stroke='#D9D9D9'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
			</svg>
		</label>
	);
};
