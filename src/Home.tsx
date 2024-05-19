import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Techs from './components/Techs';

const Home = () => {
	return (
		<div className="w-full">
			<Hero />
			<About />
			<Projects />
			<Techs />
			<Contact />
			<div className="border-b border-secondary-100/20"></div>
			<Footer />
		</div>
	);
};

export default Home;
