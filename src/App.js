import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Find from "./components/Find";
import Neighborhood from "./components/Neighborhood";
import Guides from "./components/Guides";
import Footer from "./components/Footer";

function App() {
	return (
		<div className="App">
			<Navbar />
			<Banner />
			<Find />
			<Neighborhood />
			<Guides />
			<Footer />
		</div>
	);
}

export default App;
