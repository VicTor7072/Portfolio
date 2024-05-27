import { useTranslate } from '../hooks/translate';
import Button from './ui/Button';
import Description from './ui/Description';
import Section from './ui/Section';
import Title from './ui/Title';

const About = () => {
	const translate = useTranslate();

	return (
		<Section number="01" id="about">
			<div className="flex flex-col gap-y-10">
				<div className="space-y-5 md:space-y-7">
					<Title>
						{translate(
							'I am Egemen Tarikçi, a sophomore in Computer Programming at İzmir University of Economics. I have been interested in computer games since my childhood, which later encouraged me to learn software development.',
							'Ben Egemen Tarikçi, İzmir Ekonomi Üniversitesi Bilgisayar Programcılığı 2. sınıf öğrencisiyim çocukluğumdan beri bilgisayar oyunlarına karşı ilgi duymaktayım sonrasında bu ilgi beni yazılım öğrenmeye teşvik etti.'
						)}
					</Title>

					<Description>
						{translate(
							'When I started university, I discovered the significance of databases and their substantial role in the software world. Thanks to my valuable professors during my education, I decided to advance in this field. In the next 5 years, I aim to specialize in the database field with the knowledge I have gained.',
							'Üniversiteye başladığımda veri tabanlarının ne kadar önemli olduğunu ve yazılım dünyasında ne kadar büyük bir yere sahip olduğunu keşfettim. Eğitim dönemimde sahip olduğum değerli hocalarım sayesinde bu alanda ilerlemeye karar verdim. Önümüzdeki 5 yıl içerisinde veri tabanı alanında kendime katmış olduğum bilgilerle uzmanlaşmayı hedeflemekteyim.'
						)}
					</Description>
				</div>

				<Button>
					<a
						href="/CV.pdf"
						download={'Egemen-Tarikci-CV'}
						className="text-sm font-semibold"
					>
						{translate('Check out my CV', "CV'mi inceleyin")}
					</a>
				</Button>
			</div>
		</Section>
	);
};

export default About;
