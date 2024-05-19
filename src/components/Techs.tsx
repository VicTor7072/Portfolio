import { techs } from '../data/techs';
import { TTechs } from '../types/techs';
import Button from './ui/Button';
import Section from './ui/Section';
import Title from './ui/Title';

const Techs = () => {
	const techChunks = techs.reduce(
		(result: TTechs[][], item: TTechs, index: number) => {
			const chunkIndex = Math.floor(index / 4);
			if (!result[chunkIndex]) {
				result[chunkIndex] = []; // start a new chunk
			}
			result[chunkIndex].push(item);
			return result;
		},
		[]
	);
	console.log(techChunks);

	return (
		<Section number="03" id="techs" className="md:flex-col">
			<div className="grid w-full grid-cols-4 gap-10 gap-x-20 grid-flow-col">
				<div className="col-span-1 flex flex-col gap-y-10">
					<Title className="text-3xl md:text-3xl">
						These are the technologies I have learned by creating
						projects
					</Title>

					<Button>
						<a href="#contact">Contact Me</a>
					</Button>
				</div>

				<div className="col-span-3 flex flex-col items-center gap-y-10">
					<div className="w-full border-t border-secondary-200"></div>

					{techChunks.map((techChunk) => (
						<>
							<div className="flex w-5/6 items-center justify-between">
								{techChunk.map((tech) => (
									<img
										src={tech.iconURL}
										title={tech.name}
										alt={tech.name}
										className="h-20"
									/>
								))}
							</div>
							<div className="w-full border-t border-secondary-200"></div>
						</>
					))}
				</div>

				{/* {techs.map((tech, i) => (
						<div
							key={i}
							className="project-box flex h-32 w-32 items-center justify-center rounded-md border-2 border-slate-200 p-4 transition-all duration-200"
						>
							<img
								src={tech.iconURL}
								title={tech.name}
								className="h-full"
							/>
						</div>
					))} */}
			</div>
		</Section>
	);
};

export default Techs;
