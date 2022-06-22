import React from 'react';
import './styles/home.css';

export default function Paginado({ charactersPerPage, Characters, paginado }) {
	const pageNumbers = [];

	for (let i = 1; i <= Math.ceil(Characters / charactersPerPage); i++) {
		pageNumbers.push(i);
	}
	return (
		<nav>
			<ul className='paginado'>
				{pageNumbers &&
					pageNumbers.map((num) => {
						return (
							<li className='paginado' key={num}>
								<button onClick={() => paginado(num)}>{num}</button>
							</li>
						);
					})}
			</ul>
		</nav>
	);
}
