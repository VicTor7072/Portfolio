import { FaArrowDown } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="h-[calc(100vh-60px)] min-h-[715px] flex flex-col justify-between py-5">
      <div></div>

      <div className="flex flex-col sm:flex-row w-full justify-between items-center gap-5">
        <div className="text-4xl sm:text-6xl lg:text-8xl font-medium flex flex-col gap-y-5 lg:gap-y-10 tracking-tight sm:text-nowrap self-start sm:self-auto">
          <p>Hi. I am a</p>
          <p className="font-playfair text-4xl sm:text-5xl lg:text-7xl italic">
            computer programmer
          </p>
          <p>based in İzmir</p>
        </div>

        <img src="imgs/pp9.png" alt="" className="w-96" />
      </div>

      <a href="" className="flex items-center gap-x-5">
        <FaArrowDown className="text-3xl lg:text-5xl" />
        <p className="text-lg font-semibold">scroll to continue</p>
      </a>
    </section>
  );
};

export default Hero;
