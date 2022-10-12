// Css and Icons
import "./navbar.css";
import { RiHomeSmile2Fill as Logo } from "react-icons/ri";

// Components
import { NavLink } from "react-router-dom";

export default function Index({ children }) {
	return (
		<>
			<nav className="navbar">
				<div className="wrapper">
					<p className="logo">
						<Logo className="logo-icon" />
						Estatery
					</p>
					<ul className="navlinks">
						<li>
							<NavLink className="navbar-navlink" to={"/rent"}>
								Rent
							</NavLink>
						</li>
						<li>
							<NavLink className="navbar-navlink" to={"/buy"}>
								Buy
							</NavLink>
						</li>
						<li>
							<NavLink className="navbar-navlink" to={"/sell"}>
								Sell
							</NavLink>
						</li>
					</ul>
				</div>
			</nav>
			<main className="app-main">{children}</main>
		</>
	);
}
