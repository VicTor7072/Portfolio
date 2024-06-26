import Home from './Home';
import Header from './components/Header';

function App() {
	return (
		<div className="flex items-center justify-center overflow-x-hidden bg-primary-100 px-5 font-vietnam tracking-wide text-secondary-200 transition-all duration-200">
			<div className="w-[98%] xl:w-xl">
				<Header />
				<Home />
			</div>
		</div>
	);
}

export default App;
