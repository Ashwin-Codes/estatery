import React from "react";
import "./propertyCard.css";

export default function PropertyCard({ imgUrl, price, name, address }) {
	return (
		<div className="property-card">
			<div className="image-container">
				<img src={imgUrl} alt="property" />
			</div>
			<div className="property-info-container">
				<h2 className="property-card-price">
					<span>${price}</span> <span>/month</span>
				</h2>
				<h2 className="property-card-name">{name}</h2>
				<h2 className="property-card-address">{address}</h2>
			</div>
		</div>
	);
}
