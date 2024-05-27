import { techs } from '../data/techs';
import { useTranslate } from '../hooks/translate';
import { TTechs } from '../types/techs';
import Button from './ui/Button';
import Section from './ui/Section';
import Title from './ui/Title';

const Techs = () => {
	const translate = useTranslate();

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

	return (
		<Section number="03" id="techs" className="md:flex-col">
			<div className="grid w-full grid-cols-1 gap-14 gap-x-20 md:grid-cols-4">
				<div className="col-span-3 flex flex-col gap-y-10 md:col-span-1">
					<Title className="text-1xl md:text-3xl">
						{translate(
							'These are the technologies I have learned by creating projects',
							'Proje oluşturarak öğrendiğim teknolojiler bunlar'
						)}
					</Title>

					<Button>
						<a href="#contact">
							{translate('Contact Me', 'Bana Ulaşın')}
						</a>
					</Button>
				</div>

				<div className="col-span-3 flex flex-col items-center gap-y-10">
					{techChunks.map((techChunk) => (
						<>
							<div className="flex w-5/6 flex-wrap items-center justify-center gap-7 md:justify-between">
								{techChunk.map((tech) => (
									<img
										src={tech.iconURL}
										title={tech.name}
										alt={tech.name}
										className="h-20"
									/>
								))}
							</div>
							<div className="w-full border-t border-secondary-200 last:hidden"></div>
						</>
					))}
				</div>
			</div>
		</Section>
	);
};

export default Techs;
