import "./App.css";

// Components
import Navbar from "./Components/Navbar";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Navbar>
					<Routes>
						<Route path="/*" element={<Navigate replace to={"/rent"} />} />
						<Route path="/rent" />
						<Route path="/buy" />
						<Route path="/sell" />
					</Routes>
				</Navbar>
			</BrowserRouter>
		</div>
	);
}

export default App;
