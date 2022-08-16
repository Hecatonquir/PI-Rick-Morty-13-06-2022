import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "./02-Navbar.jsx";

import "./styles/home.css";

import * as A from "../redux/actions";
import SearchBar from "./searchbar";
import Tarjeta from "./Tarjeta";
import * as Filter from "./Filtros";
import Paginado from "./paginado.jsx";

export default function Home() {
	const dispatch = useDispatch();
	const Characters = useSelector((state) => state.characters);
	const ALLCharacters = useSelector((state) => state.allCharacters);

	const allOrigins = [...new Set(ALLCharacters.length ? ALLCharacters.map((char) => char.origin) : "")];
	const allSpecies = [...new Set(ALLCharacters.length ? ALLCharacters.map((char) => char.species) : "")];

	//_________________________________ Paginado ________________________________________
	const [currentPage, setCurrentPage] = useState(1);
	// eslint-disable-next-line no-unused-vars
	const [charactersPerPage, setCharactersPerPage] = useState(4);
	// eslint-disable-next-line no-unused-vars
	const [orden, setOrden] = useState("");
	const indexOfLastCharacter = currentPage * charactersPerPage;
	const indexOfFirstCharacter = indexOfLastCharacter - charactersPerPage;
	let currentCharacters = Characters?.length
		? Characters.slice(indexOfFirstCharacter, indexOfLastCharacter)
		: "NO HAY Characters";
	/* console.log('🚀 ~ file: 03-Home.jsx ~ line 26 ~ Home ~ currentCharacters', currentCharacters); */
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
		<main className="home">
			<br />

			<br />
			<Navbar />
			<button onClick={(e) => handleRefresh(e)}> Recargar la página </button>
			{currentCharacters.length > 1 ? <SearchBar /> : ""}
			<div>
				<Filter.ByOrigin allOrigins={allOrigins} />
				<Filter.BySpecie allSpecies={allSpecies} />
				<Filter.Created />
				<Filter.ByAlphabet setCurrentPage={setCurrentPage} setOrden={setOrden} />
			</div>
			<br />
			<Paginado charactersPerPage={charactersPerPage} Characters={Characters.length} paginado={paginado} />
			{/* {console.log(
				'🚀 ~ file: 03-Home.jsx ~ line 59 ~ Home ~ currentCharacters',
				currentCharacters
			)} */}
			{Characters?.length ? (
				typeof currentCharacters !== "string" ? (
					<section className="Tarjetas">
						{currentCharacters.map((e) => {
							return (
								<Tarjeta
									key={e.id}
									id={e.id}
									image={e.image}
									name={e.name}
									origin={e.origin}
									species={e.species}
									episode={e.episode}
									apiId={e.apiId}
								/>
							);
						})}
					</section>
				) : (
					<h2>Ocurrió algún error en la API</h2>
				)
			) : (
				<div className="loading">
					<img className="loading" src="https://c.tenor.com/6Tc-POkXDgYAAAAC/epic-rick-and-morty.gif" alt="portal" />
					<h2 className="loading"> Loading...</h2>
				</div>
			)}
			<br />
			<Paginado charactersPerPage={charactersPerPage} Characters={Characters.length} paginado={paginado} />
			<br />
		</main>
	);
}
