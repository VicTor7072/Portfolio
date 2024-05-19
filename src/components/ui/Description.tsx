import { cn } from '../../utils/cn';

type DescriptionProps = {
	children?: string;
	className?: string;
};

const Description = ({ children, className }: DescriptionProps) => {
	const classes = cn('leading-6 text-secondary-100 md:leading-loose', className);
	return <div className={classes}>{children}</div>;
};

export default Description;
