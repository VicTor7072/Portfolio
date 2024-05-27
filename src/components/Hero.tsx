import { FaArrowDown } from 'react-icons/fa';
import { useTranslate } from '../hooks/translate';

const Hero = () => {
	const translate = useTranslate();

	return (
		<section
			className="-mt-10 flex flex-col gap-10 py-5 sm:h-[calc(100vh-120px)] sm:justify-between md:-mt-0"
			id="hero"
		>
			<div></div>

			<div className="flex w-full flex-col items-center justify-between gap-5 sm:flex-row">
				<div className="flex flex-col gap-y-3 self-start text-4xl font-medium tracking-tight sm:self-auto sm:text-nowrap sm:text-6xl md:gap-y-5 lg:gap-y-10 lg:text-8xl">
					<p>{translate('Hi. I am a', 'Merhaba, ben bir')}</p>
					<p className="font-playfair text-4xl italic sm:text-5xl lg:text-7xl">
						{translate(
							'computer programmer',
							'bilgisayar programcısıyım'
						)}
					</p>
					<p>{translate('based in İzmir', 'İzmir\'deyim')}</p>
				</div>

				<img src="/imgs/pp.jpg" alt="" className="w-60 md:w-96" />
			</div>

			<a href="#about" className="flex items-center gap-x-5">
				<FaArrowDown className="text-3xl lg:text-5xl" />
				<p className="text-lg font-semibold">{translate('Scroll to continue', 'Devam etmek için kaydır')}</p>
			</a>
		</section>
	);
};

export default Hero;
