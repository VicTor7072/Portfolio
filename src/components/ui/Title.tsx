import { ReactNode } from 'react';
import { cn } from '../../utils/cn';

type TitleProps = {
	children?: ReactNode;
	className?: string;
};

const Title = ({ children, className }: TitleProps) => {
	const classes = cn('text-lg font-semibold md:text-xl', className);
	return <div className={classes}>{children}</div>;
};

export default Title;
