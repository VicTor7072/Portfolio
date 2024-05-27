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
						I am Egemen Tarikçi, a sophomore in Computer Programming at
						İzmir University of Economics. I have been interested in
						computer games since my childhood, which later encouraged me
						to learn software development.
					</Title>

					<Description>
						When I started university, I discovered the significance of
						databases and their substantial role in the software world.
						Thanks to my valuable professors during my education, I
						decided to advance in this field. In the next 5 years, I aim
						to specialize in the database field with the knowledge I
						have gained.
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
