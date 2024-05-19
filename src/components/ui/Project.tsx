import { cn } from '../../utils/cn';
import Description from './Description';
import Title from './Title';

type ProjectProps = {
	title: string;
	description: string;
	url?: string;
	className?: string;
};

const Project = ({ title, description, url, className }: ProjectProps) => {
	const classes = cn(
		'border-secondary-200 project-box flex flex-col gap-y-5 border p-7 transition-all duration-200',
		className
	);

	return (
		<a href={url} className={classes}>
			<Title>{title}</Title>
			<Description>{description}</Description>
		</a>
	);
};

export default Project;
