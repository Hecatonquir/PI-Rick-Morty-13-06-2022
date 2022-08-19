import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as A from '../redux/actions';
import SearchBar from './searchbar';
import Tarjeta from './Tarjeta';
import * as Filter from './Filtros';
import Paginado from './paginado.jsx';
import NavbarBootstrap from './02-Navbar.jsx';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import './styles/home.css';

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
	const [charactersPerPage, setCharactersPerPage] = useState(8);
	// eslint-disable-next-line no-unused-vars
	const [orden, setOrden] = useState('');
	const indexOfLastCharacter = currentPage * charactersPerPage;
	const indexOfFirstCharacter = indexOfLastCharacter - charactersPerPage;
	let currentCharacters = Characters?.length
		? Characters.slice(indexOfFirstCharacter, indexOfLastCharacter)
		: 'NO HAY Characters';
	//console.log('💥💥💥🟢🟢🟢 / file: 03-Home.jsx / line 34 / Home / currentCharacters', currentCharacters);

	const paginado = (pagenumber) => {
		setCurrentPage(pagenumber);
	};

	//_________________________________ Paginado ________________________________________
	useEffect(() => {
		dispatch(A.getCharacters());
		dispatch(A.getEpisodes());
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [dispatch]);

	let handleRefresh = (e) => {
		e.preventDefault();
		dispatch(A.getCharacters());
	};

	return (
		<div>
			<header>{<NavbarBootstrap />}</header>
			<main className='home mt-5'>
				<Container className='text-center mt-3 py-2 filtros'>
					<Row className='my-2'>
						<Col>{<SearchBar />}</Col>
						<Col>
							<Button variant='outline-light' onClick={(e) => handleRefresh(e)}>
								Clear Filters
							</Button>
						</Col>
					</Row>
					<Row className='my-2'>
						<Col>{<Filter.ByOrigin allOrigins={allOrigins} />}</Col>
						<Col>{<Filter.BySpecie allSpecies={allSpecies} />}</Col>
						<Col>{<Filter.Created />}</Col>
						<Col>{<Filter.ByAlphabet setCurrentPage={setCurrentPage} setOrden={setOrden} />}</Col>
					</Row>
				</Container>
				<Container className='text-center mt-3'>
					<Paginado
						charactersPerPage={charactersPerPage}
						Characters={Characters.length}
						paginado={paginado}
						currentPage={currentPage}
					/>
				</Container>

				<Container className='text-center'>
					{Characters?.length ? (
						typeof currentCharacters !== 'string' ? (
							<Row>
								{currentCharacters.map((e) => {
									return (
										<Col key={e.id} xxl={3} lg={4} md={6} xs={12}>
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
							<Row className='justify-content-center'>
								<h2 style={{ backgroundColor: 'rgba(0,0,0,0.5)', color: 'white', borderRadius: '20px' }}>
									{Characters}
								</h2>
							</Row>
						)
					) : (
						<Container className='loading text-center '>
							<Row className='justify-content-center'>
								<img
									className='Loading-img'
									src='https://c.tenor.com/6Tc-POkXDgYAAAAC/epic-rick-and-morty.gif'
									alt='portal'
								/>
							</Row>
							<Row>
								<h2 className='loading'> Loading...</h2>
							</Row>
						</Container>
					)}
				</Container>
				<Container className='text-center mt-3'>
					<Paginado
						charactersPerPage={charactersPerPage}
						Characters={Characters.length}
						paginado={paginado}
						currentPage={currentPage}
					/>
				</Container>
			</main>
			<footer className='text-center bg-dark text-white p-5'>
				<Container className='  px-5'>
					<p>Copyright &copy; Max 2022</p>
				</Container>
			</footer>
		</div>
	);
}
