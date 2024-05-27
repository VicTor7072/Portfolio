import { useTranslate } from '../hooks/translate';

const Footer = () => {
	const translate = useTranslate();

	return (
		<div className="flex flex-col items-start gap-y-2 py-10">
			<p>@ 2024 egemen tarikci</p>
			<p>{translate('Computer Programmer', 'Bilgisayar Programcısı')}</p>
		</div>
	);
};

export default Footer;
