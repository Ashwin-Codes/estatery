// Css and Icons
import "./navbar.css";
import { RiHomeSmile2Fill as Logo } from "react-icons/ri";

// Components
import { NavLink } from "react-router-dom";

export default function Index({ children }) {
	const links = [
		{ path: "/rent", text: "Rent" },
		{ path: "/buy", text: "Buy" },
		{ path: "/sell", text: "Sell" },
	];

	return (
		<>
			<nav className="navbar">
				<div className="wrapper">
					<p className="logo">
						<Logo className="logo-icon" />
						Estatery
					</p>
					<ul className="navlinks">
						{links.map((link) => {
							return (
								<li key={link.path}>
									<NavLink className="navbar-navlink" to={link.path}>
										{link.text}
									</NavLink>
								</li>
							);
						})}
					</ul>
				</div>
			</nav>
			<div className="app-main">{children}</div>
		</>
	);
}
