import { FaArrowDown } from 'react-icons/fa';

const Hero = () => {
	return (
		<section className="flex h-[calc(100vh-60px)] min-h-[715px] flex-col justify-between py-5">
			<div></div>

			<div className="flex w-full flex-col items-center justify-between gap-5 sm:flex-row">
				<div className="flex flex-col gap-y-5 self-start text-4xl font-medium tracking-tight sm:self-auto sm:text-nowrap sm:text-6xl lg:gap-y-10 lg:text-8xl">
					<p>Hi. I am a</p>
					<p className="font-playfair text-4xl italic sm:text-5xl lg:text-7xl">
						computer programmer
					</p>
					<p>based in İzmir</p>
				</div>

				<img src="imgs/pp9.jpg" alt="" className="w-96" />
			</div>

			<a href="" className="flex items-center gap-x-5">
				<FaArrowDown className="text-3xl lg:text-5xl" />
				<p className="text-lg font-semibold">scroll to continue</p>
			</a>
		</section>
	);
};

export default Hero;
