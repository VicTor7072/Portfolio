import Section from './ui/Section';
import Title from './ui/Title';

const Contact = () => {
	return (
		<Section className="gap-y-10 md:flex-col" id="contact">
			<Title>Want to work with me?</Title>

			<a
				href="mailto:tarikciegemen@gmail.com"
				className="text-2xl tracking-tight underline sm:text-6xl md:text-7xl"
			>
				tarikciegemen@gmail.com
			</a>
		</Section>
	);
};

export default Contact;
