import { createSlice } from "@reduxjs/toolkit";

const propertySlice = createSlice({
	name: "properties",
	initialState: null,
	reducers: {
		setProperties(state, action) {
			return { properties: action.payload, filteredProperties: null };
		},
		setFilteredProperties(state, action) {
			return { ...state, filteredProperties: action.payload };
		},
	},
});

export default propertySlice;
