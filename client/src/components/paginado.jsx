import React from 'react';
import './styles/home.css';
import Pagination from 'react-bootstrap/Pagination';

export default function Paginado({ charactersPerPage, Characters, paginado, currentPage }) {
	const pageNumbers = [];

	for (let i = 1; i <= Math.ceil(Characters / charactersPerPage); i++) {
		pageNumbers.push(i);
	}
	return (
		<Pagination className='justify-content-center dark' variant='dark'>
			{pageNumbers &&
				pageNumbers.map((num) => {
					return (
						<Pagination.Item
							key={num}
							onClick={() => paginado(num)}
							active={num === currentPage ? true : false}>
							{num}
						</Pagination.Item>
					);
				})}
		</Pagination>
	);
}
