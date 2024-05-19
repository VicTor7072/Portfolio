import { useState } from 'react';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { IoMdClose, IoMdMenu } from 'react-icons/io';
import { cn } from '../utils/cn';

const Header = () => {
	const [isNavOpen, setIsNavOpen] = useState(false);

	return (
		<>
			<header
				className={cn(
					'sticky top-0 mt-4 flex justify-between lg:items-center',
					{
						'absolute left-0 top-0 mt-0 h-screen w-screen flex-col bg-primary-100 px-7 py-4':
							isNavOpen,
					}
				)}
			>
				<div className="font-extrabold tracking-normal">
					<p>egemen</p>
					<p className="-mt-2">tarikçi _</p>
				</div>

				<nav
					className={cn('hidden lg:inline', {
						'mx-auto inline self-center': isNavOpen,
					})}
				>
					<ul className="flex flex-col gap-16 text-center text-lg font-semibold lg:flex-row">
						<li className="cursor-default transition-colors duration-200 hover:text-accent-200">
							<a href="#hero" onClick={() => setIsNavOpen(false)}>
								Home
							</a>
						</li>
						<li className="cursor-default transition-colors duration-200 hover:text-accent-200">
							<a href="#projects" onClick={() => setIsNavOpen(false)}>
								Projects
							</a>
						</li>
						<li className="cursor-default transition-colors duration-200 hover:text-accent-200">
							<a href="#techs" onClick={() => setIsNavOpen(false)}>
								Technologies
							</a>
						</li>
						<li className="cursor-default transition-colors duration-200 hover:text-accent-200">
							<a href="#contact" onClick={() => setIsNavOpen(false)}>
								Contact
							</a>
						</li>
					</ul>
				</nav>

				<div
					className={cn('hidden gap-x-2 text-2xl lg:flex', {
						'mx-auto flex self-center': isNavOpen,
					})}
				>
					<a
						href=""
						className="cursor-pointer rounded p-2 transition-colors duration-200 hover:bg-accent-100 hover:text-primary-100 active:bg-accent-200"
					>
						<FaLinkedin />
					</a>
					<a
						href=""
						className="cursor-pointer rounded p-2 transition-colors duration-200 hover:bg-accent-100 hover:text-primary-100 active:bg-accent-200"
					>
						<FaGithub />
					</a>
					<a
						href=""
						className="cursor-pointer rounded p-2 transition-colors duration-200 hover:bg-accent-100 hover:text-primary-100 active:bg-accent-200"
					>
						<FaInstagram />
					</a>
				</div>
			</header>

			<button
				className="absolute right-0 top-0 p-5 text-3xl lg:hidden"
				onClick={() => setIsNavOpen(!isNavOpen)}
			>
				{isNavOpen ? <IoMdClose /> : <IoMdMenu />}
			</button>
		</>
	);
};

export default Header;
