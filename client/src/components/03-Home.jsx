import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//import Navbar from './02-Navbar.jsx';

import './styles/home.css';

import * as A from '../redux/actions';
import SearchBar from './searchbar';
import Tarjeta from './Tarjeta';
import * as Filter from './Filtros';
import Paginado from './paginado.jsx';
import NavbarBootstrap from './02-Navbar.jsx';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Home() {
	const dispatch = useDispatch();
	const Characters = useSelector((state) => state.characters);
	//console.log('🟢🟢🟢 / file: 03-Home.jsx / line 18 / Home / Characters', Characters);

	const ALLCharacters = useSelector((state) => state.allCharacters);

	const allOrigins = [...new Set(ALLCharacters.length ? ALLCharacters.map((char) => char.origin) : '')];
	const allSpecies = [...new Set(ALLCharacters.length ? ALLCharacters.map((char) => char.species) : '')];

	//_________________________________ Paginado ________________________________________
	const [currentPage, setCurrentPage] = useState(1);
	// eslint-disable-next-line no-unused-vars
	const [charactersPerPage, setCharactersPerPage] = useState(9);
	// eslint-disable-next-line no-unused-vars
	const [orden, setOrden] = useState('');
	const indexOfLastCharacter = currentPage * charactersPerPage;
	const indexOfFirstCharacter = indexOfLastCharacter - charactersPerPage;
	let currentCharacters = Characters?.length
		? Characters.slice(indexOfFirstCharacter, indexOfLastCharacter)
		: 'NO HAY Characters';
	//console.log('🚀 ~ file: 03-Home.jsx ~ line 26 ~ Home ~ currentCharacters', currentCharacters);
	//if (Characters.length) Characters.sort((a, b) => (a.id > b.id ? 1 : -1));
	const paginado = (pagenumber) => {
		setCurrentPage(pagenumber);
	};

	//_________________________________ Paginado ________________________________________
	useEffect(() => {
		dispatch(A.getCharacters());
		dispatch(A.getEpisodes());
	}, [dispatch]);

	let handleRefresh = (e) => {
		e.preventDefault();
		dispatch(A.getCharacters());
	};

	return (
		<div>
			<header className='my-5'>{<NavbarBootstrap />}</header>
			<main className='home'>
				<Container className='text-center bg-secondary my-3'>
					<Row className='px-5 my-4'>
						<Col>{<SearchBar />}</Col>
						<Col>{<button onClick={(e) => handleRefresh(e)}> Recargar la página </button>}</Col>
					</Row>
					<Row className='px-5 my-4'>
						<Col>{<Filter.ByOrigin allOrigins={allOrigins} />}</Col>
						<Col>{<Filter.BySpecie allSpecies={allSpecies} />}</Col>
						<Col>{<Filter.Created />}</Col>
						<Col>{<Filter.ByAlphabet setCurrentPage={setCurrentPage} setOrden={setOrden} />}</Col>
					</Row>
				</Container>
				<Container className='text-center'>
					<Paginado
						charactersPerPage={charactersPerPage}
						Characters={Characters.length}
						paginado={paginado}
					/>
				</Container>

				<Container>
					<Row>
						{Characters?.length ? (
							typeof currentCharacters !== 'string' ? (
								<Row>
									{currentCharacters.map((e) => {
										return (
											<Col key={e.id}>
												<Tarjeta
													id={e.id}
													image={e.image}
													name={e.name}
													origin={e.origin}
													species={e.species}
													episode={e.episodes}
													apiId={e.apiId}
												/>
											</Col>
										);
									})}
								</Row>
							) : (
								<h2>Ocurrió algún error en la API</h2>
							)
						) : (
							<div className='loading'>
								<img
									style={{ borderRadius: '15px' }}
									src='https://c.tenor.com/6Tc-POkXDgYAAAAC/epic-rick-and-morty.gif'
									alt='portal'
								/>
								<br />
								<br />
								<h2 className='loading'> Loading...</h2>
							</div>
						)}
					</Row>
				</Container>
				<Container className='text-center my-3'>
					<Paginado
						charactersPerPage={charactersPerPage}
						Characters={Characters.length}
						paginado={paginado}
					/>
				</Container>
			</main>
			<footer className='text-center bg-dark text-white p-5'>
				<Container className='m-1 px-5'>
					<p>Copyright &copy; Max 2022</p>
				</Container>
			</footer>
		</div>
	);
}
