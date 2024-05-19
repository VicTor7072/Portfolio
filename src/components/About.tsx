import Button from './ui/Button';
import Description from './ui/Description';
import Section from './ui/Section';
import Title from './ui/Title';

const About = () => {
	return (
		<Section number="01" id="about">
			<div className="flex flex-col gap-y-10">
				<div className="space-y-5 md:space-y-7">
					<Title>
						I am Egemen Tarıkçı, I am a 2nd year student of Computer
						Programming at Izmir University of Economics. I have been
						interested in computer science since my childhood, and this
						interest later encouraged me to study.
					</Title>

					<Description>
						Since I started university, I have discovered how important
						databases are and how significant they are in the world of
						software. Thanks to my valuable professors during my
						education, I decided to advance in this field. Over the next
						five years, I aim to specialize with the knowledge I have
						gained in the field of databases.
					</Description>
				</div>

				<Button>
					<a
						href="/CV.pdf"
						download={'Egemen-Tarikci-CV'}
						className="text-sm font-semibold"
					>
						Check out my CV
					</a>
				</Button>
			</div>
		</Section>
	);
};

export default About;
