import { useState } from 'react';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { IoMdClose, IoMdMenu } from 'react-icons/io';
import { cn } from '../utils/cn';

import { toggle } from '../app/langSlice';
import { useAppDispatch, useAppSelector } from '../hooks';
import { useTranslate } from '../hooks/translate';

const Header = () => {
	const lang = useAppSelector((state) => state.lang.value);
	const dispatch = useAppDispatch();
	const translate = useTranslate();

	const [isNavOpen, setIsNavOpen] = useState(false);

	if (isNavOpen) {
		document.body.style.overflow = 'hidden';
	} else {
		document.body.style.overflow = '';
	}

	return (
		<>
			<header
				className={cn(
					'sticky top-0 mt-4 flex justify-between lg:items-center',
					{
						'absolute left-0 top-0 mt-0 h-dvh w-screen flex-col bg-primary-100 px-7 py-4':
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
								{translate('Home', 'Ana Sayfa')}
							</a>
						</li>
						<li className="cursor-default transition-colors duration-200 hover:text-accent-200">
							<a href="#projects" onClick={() => setIsNavOpen(false)}>
								{translate('Projects', 'Projeler')}
							</a>
						</li>
						<li className="cursor-default transition-colors duration-200 hover:text-accent-200">
							<a href="#techs" onClick={() => setIsNavOpen(false)}>
								{translate('Technologies', 'Teknolojiler')}
							</a>
						</li>
						<li className="cursor-default transition-colors duration-200 hover:text-accent-200">
							<a href="#contact" onClick={() => setIsNavOpen(false)}>
								{translate('Contact', 'İletişim')}
							</a>
						</li>
					</ul>
				</nav>

				<div
					className={cn('hidden gap-x-2 text-2xl lg:flex', {
						'mx-auto flex self-center': isNavOpen,
					})}
				>
					<button
						className="mr-10 w-7"
						onClick={() => dispatch(toggle())}
					>
						{lang === 'tr' ? (
							<img src="/svgs/Turkish-Flag.svg" />
						) : (
							<img src="/svgs/UK-Flag.svg" alt="" />
						)}
					</button>
					<a
						href="https://www.linkedin.com/in/egemen-tarik%C3%A7i-834083251/"
						className="cursor-pointer rounded p-2 transition-colors duration-200 hover:bg-blue-600 hover:text-primary-100"
					>
						<FaLinkedin />
					</a>
					<a
						href="https://github.com/VicTor7072"
						className="cursor-pointer rounded p-2 transition-colors duration-200 hover:bg-black hover:text-primary-100"
					>
						<FaGithub />
					</a>
					<a
						href="https://www.instagram.com/egementarikci/"
						className="cursor-pointer rounded bg-gradient-to-tr p-2 transition-all duration-200 hover:from-[#f9ce34] hover:via-[#ee2a7b] hover:to-[#6228d7] hover:text-primary-100"
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
