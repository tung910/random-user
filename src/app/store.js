import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import userAPI from "../services/userAPI";

export const store = configureStore({
	reducer: {
		counter: counterReducer,
		[userAPI.reducerPath]: userAPI.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(userAPI.middleware),
});
