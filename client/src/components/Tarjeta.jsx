import React from 'react';
import './styles/Tarjeta.css';

export default function Tarjeta({ id, image, name, origin, species, episode, apiId }) {
	//console.log('💥💥💥🟢🟢🟢 / file: Tarjeta.jsx / line 5 / Tarjeta / episode', episode);
	function capitalizeWords(name) {
		return name.replace(/(?:^|\s)\S/g, function (a) {
			return a.toUpperCase();
		});
	}
	let CapitalizedName = capitalizeWords(name);
	return (
		<div className='Tarjeta'>
			<img src={image} alt='name' width='200px' height='250px' />
			<h2>
				Nº {apiId ? apiId : id.slice(0, 4)}: {CapitalizedName}
			</h2>
			<h3>Origen: {origin}</h3>
			<h3>Especie: {species}</h3>
			<h3>
				Episodios:{' '}
				{episode?.length > 2
					? episode
							.map((e) => e.name)
							.slice(0, 1)
							.join(' \\ ') + ' \\ y muchos más!'
					: episode?.map((e) => e.name)}
			</h3>
		</div>
	);
}
