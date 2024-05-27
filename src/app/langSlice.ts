import { createSlice } from '@reduxjs/toolkit';

type TLangType = {
	value: 'eng' | 'tr';
};

const initialLang: TLangType = {
	value: 'eng',
};

export const langSlice = createSlice({
	name: 'lang',
	initialState: initialLang,
	reducers: {
		toggle: (state) => {
			switch (state.value) {
				case 'eng':
					state.value = 'tr';
					break;
				case 'tr':
					state.value = 'eng';
					break;
			}
		},
	},
});

// Action creators are generated for each case reducer function
export const { toggle } = langSlice.actions;
export default langSlice.reducer;
