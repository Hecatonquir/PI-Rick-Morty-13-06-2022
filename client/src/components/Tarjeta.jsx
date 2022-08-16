import React from "react";
import "./styles/Tarjeta.css";

export default function Tarjeta({ id, image, name, origin, species, episode, apiId }) {
	function capitalizeWords(name) {
		return name.replace(/(?:^|\s)\S/g, function (a) {
			return a.toUpperCase();
		});
	}
	let CapitalizedName = capitalizeWords(name);
	return (
		<div className="Tarjeta">
			<img src={image} alt="name" width="200px" height="250px" />
			<h2>
				Nº {apiId ? apiId : id.slice(0, 4)}: {CapitalizedName}
			</h2>
			<h3>Origen: {origin}</h3>
			<h3>Especie: {species}</h3>
			<h3>
				Episodios: {episode?.length > 2 ? episode.slice(0, 3).join(" - ") + " - y muchos más.." : episode?.join(" - ")}
			</h3>
		</div>
	);
}
