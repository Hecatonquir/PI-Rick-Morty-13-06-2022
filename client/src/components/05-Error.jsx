import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./02-Navbar";
import "./styles/error.css";

export default function Error() {
	return (
		<main className="error">
			<br />
			<Navbar />
			<img src="https://d2y5h3osumboay.cloudfront.net/tzwr44rofmk13qgwe29ijbdrqw9e" alt="error" />
			<h2> Ocurrió un problema... </h2>
			<h2>
				<Link to="/"> Volver a Landing Page </Link>
			</h2>
		</main>
	);
}
