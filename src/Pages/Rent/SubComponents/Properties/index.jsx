import React from "react";
import { useSelector } from "react-redux";

// Css
import "./properties.css";

// Components
import PropertyCard from "./propertyCard";

export default function Index() {
	const filteredProperties = useSelector((state) => {
		if (!state.properties) return;
		return state.properties.filteredProperties;
	});

	if (!filteredProperties) {
		return;
	}

	return (
		<div className="properties-container">
			{filteredProperties.length < 1 ? <h3>No Properties Found with this filter.</h3> : ""}
			{filteredProperties.map((property, index) => {
				return (
					<PropertyCard
						key={index}
						imgUrl={property.url}
						price={property.price}
						name={property.name}
						address={property.address}
					/>
				);
			})}
		</div>
	);
}
