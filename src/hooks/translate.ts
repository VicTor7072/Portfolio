import { useAppSelector } from '.';
export const useTranslate = () => {
	const lang = useAppSelector((state) => state.lang.value);

	const translate = (eng: string, tr: string) => {
		return lang === 'eng' ? eng : tr;
	};

	return translate;
};
