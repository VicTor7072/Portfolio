import { useTranslate } from '../../hooks/translate';
import { cn } from '../../utils/cn';
import Description from './Description';
import Title from './Title';

type ProjectProps = {
	title: { eng: string; tr: string };
	description: { eng: string; tr: string };
	url?: string;
	className?: string;
};

const Project = ({ title, description, url, className }: ProjectProps) => {
	const translate = useTranslate();

	const classes = cn(
		'border-secondary-200 project-box flex flex-col gap-y-5 border p-7 transition-all duration-200',
		className
	);

	return (
		<a href={url} target="_blank" className={classes}>
			<Title>{translate(title.eng, title.tr)}</Title>
			<Description>{translate(description.eng, description.tr)}</Description>
		</a>
	);
};

export default Project;
