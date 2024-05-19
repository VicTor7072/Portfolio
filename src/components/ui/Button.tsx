import { ReactNode } from 'react';
import { cn } from '../../utils/cn';

type ButtonProps = {
	children?: ReactNode;
	className?: string;
};

const Button = ({ children, className }: ButtonProps) => {
	const classes = cn('group relative h-max w-max', className);

	return (
		<button className={classes}>
			{children}
			<div className="absolute -bottom-2 w-full border-b-2 border-sky-400 transition-all duration-200 group-hover:-bottom-1.5"></div>
		</button>
	);
};

export default Button;
