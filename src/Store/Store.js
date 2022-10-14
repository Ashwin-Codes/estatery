import { configureStore } from "@reduxjs/toolkit";
import propertySlice from "./Slice/propertiesSlice";

const Store = configureStore({
	reducer: {
		properties: propertySlice.reducer,
	},
});

export const propertyActions = propertySlice.actions;
export default Store;
