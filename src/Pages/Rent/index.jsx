import React, { useEffect } from "react";

// Store
import { useDispatch } from "react-redux";
import { propertyActions } from "../../Store/Store";

// Css
import "./rent.css";

// Components
import Filters from "./SubComponents/Filters";
import Properties from "./SubComponents/Properties";

// Api Url
const URL = "http://65.0.92.225:5000/api/estatery";

export default function Index() {
	const dispatch = useDispatch();

	useEffect(() => {
		async function getData() {
			const res = await fetch(URL);
			const data = await res.json();
			dispatch(propertyActions.setProperties(data));
			dispatch(propertyActions.setFilteredProperties(data));
		}
		getData();
	}, [dispatch]);

	return (
		<main className="page-wrapper">
			<div className="rent-page-content-wrapper">
				<h1 className="rent-page-heading">Search properties to rent</h1>
				<Filters />
				<Properties />
			</div>
		</main>
	);
}
