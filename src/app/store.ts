import { configureStore } from '@reduxjs/toolkit';
import langSlice from './langSlice';

const store = configureStore({
	reducer: {
		lang: langSlice,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
