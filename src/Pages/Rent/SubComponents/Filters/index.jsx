import { useState } from "react";

// Store
import { useDispatch, useSelector } from "react-redux";
import { propertyActions } from "../../../../Store/Store";

// Css and icons
import "./filters.css";

export default function Index() {
	const dispatch = useDispatch();

	const properties = useSelector((state) => {
		if (!state.properties) return;
		return state.properties.properties;
	});

	// Filter States
	const [priceFilter, setPriceFilter] = useState({
		low: 500,
		high: 2500,
	});

	const [locationFilter, setLocationFilter] = useState("newyork");
	const [dateFilter, setDateFilter] = useState(new Date().toISOString().split("T")[0]);
	const [typeFilter, setTypeFilter] = useState("house");

	function priceFilterLowHandler(e) {
		e.preventDefault();
		const newFilter = e.target.value;
		if (newFilter > priceFilter.high) {
			setPriceFilter((state) => {
				return { ...state, low: parseInt(priceFilter.high) };
			});
			return;
		}
		setPriceFilter((state) => {
			return { ...state, low: parseInt(newFilter) };
		});
	}

	function priceFilterHighHandler(e) {
		e.preventDefault();
		const newFilter = e.target.value;
		if (newFilter < priceFilter.low) {
			setPriceFilter((state) => {
				return { ...state, high: parseInt(priceFilter.low) };
			});
			return;
		}
		setPriceFilter((state) => {
			return { ...state, high: parseInt(newFilter) };
		});
	}

	function locationInputHandler(e) {
		setLocationFilter(e.target.value.toLowerCase());
	}
	function dateInputHandler(e) {
		setDateFilter(e.target.value);
	}
	function typeFilterHandler(e) {
		setTypeFilter(e.target.value.toLowerCase());
	}

	function filterHandler(e) {
		e.preventDefault();

		// Filter

		const filteredArray = properties.filter((property) => {
			if (!(property.location === locationFilter)) return false;
			if (
				!(parseInt(property.price) <= priceFilter.high && property.price >= priceFilter.low)
			)
				return false;
			if (!(property.type === typeFilter)) return false;
			return true;
		});
		dispatch(propertyActions.setFilteredProperties(filteredArray));
	}

	return (
		<div className="filter-wrapper">
			<form onSubmit={filterHandler}>
				<div className="filter location">
					<h2>Location</h2>
					<select onChange={locationInputHandler}>
						<option value="newyork">New York</option>
						<option value="siliconvalley">Silicon Valley</option>
						<option value="toronto">Toronto</option>
						<option value="mumbai">Mumbai</option>
					</select>
				</div>
				<div className="filter date">
					<h2>When</h2>
					<input
						type="date"
						onChange={dateInputHandler}
						defaultValue={new Date().toISOString().split("T")[0]}
					/>
				</div>
				<div className="filter price">
					<h2>Price</h2>
					<div className="filter-price-input-wrapper">
						<div>
							$
							<input
								type="number"
								defaultValue={priceFilter.low}
								max={priceFilter.high}
								onChange={priceFilterLowHandler}
							/>
						</div>
						<div>
							$
							<input
								type="number"
								defaultValue={priceFilter.high}
								min={priceFilter.low}
								onChange={priceFilterHighHandler}
							/>
						</div>
					</div>
				</div>
				<div className="filter type">
					<h2>Property Type</h2>
					<select onChange={typeFilterHandler}>
						<option value="house">House</option>
						<option value="apartments">Apartments</option>
						<option value="penthouse">Penthouse</option>
						<option value="studio">Studio</option>
					</select>
				</div>
				<button className="filter-submit-btn">Search</button>
			</form>
		</div>
	);
}
