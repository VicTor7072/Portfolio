import { projects } from '../data/projects';
import { useTranslate } from '../hooks/translate';
import Description from './ui/Description';
import Project from './ui/Project';
import Section from './ui/Section';
import Title from './ui/Title';

const Projects = () => {
	const translate = useTranslate();

	return (
		<Section number="02" id="projects">
			<div className="flex flex-col gap-y-10">
				<div className="space-y-5 md:space-y-7">
					<Title>
						{translate(
							'These are the projects I have developed so far',
							'Bunlar, şu ana kadar yaptığım projeler'
						)}
					</Title>
					<Description>
						{translate(
							'Here are the main projects that have helped me in my journey of self-discovery and increasing my interest and knowledge in software.',
							'Kendimi keşfetme yolculuğumda bana yardımcı olan, yazılıma olan ilgimi ve bilgimi artıran başlıca projeler şunlardır.'
						)}
					</Description>
				</div>
				<div className="grid w-full grid-cols-1 flex-col gap-7 md:grid-cols-2">
					{projects.map((project, i) => (
						<Project
							title={project.title}
							description={project.description}
							url={project.url}
							key={i}
						></Project>
					))}
				</div>
			</div>
		</Section>
	);
};

export default Projects;
