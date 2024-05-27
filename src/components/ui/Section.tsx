import { ReactNode } from 'react';
import { cn } from '../../utils/cn';

type SectionProps = {
	// WTF????
	number?: string;
	id?: string;
	className?: string;
	children?: ReactNode;
};

const Section = ({ number, id, className, children }: SectionProps) => {
	const classes = cn(
		'flex flex-col items-start justify-between gap-5 md:flex-row md:gap-y-20',
		className
	);

	return (
		<section className={classes} id={id}>
			{number && <p className="text-3xl text-secondary-100">{number}.</p>}

			{children}
		</section>
	);
};

export default Section;
