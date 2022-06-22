import React from 'react';
import { useDispatch } from 'react-redux';

import {
	filterByOrigin,
	filterCreatedCharacters,
	filteredAlphabetycally,
	filteredBySpecie,
} from '../redux/actions';

export function ByOrigin(obj) {
	const dispatch = useDispatch();
	const { allOrigins } = obj;

	function handleFilterTypes(e) {
		dispatch(filterByOrigin(e.target.value));
	}

	return (
		<select onChange={(e) => handleFilterTypes(e)}>
			<option value='All'> Origen </option>
			{allOrigins.length
				? allOrigins.map((or) => {
						return (
							<option key={or} value={or}>
								{or}
							</option>
						);
				  })
				: allOrigins}
		</select>
	);
}

export function Created() {
	const dispatch = useDispatch();

	function handleFilterCreated(e) {
		dispatch(filterCreatedCharacters(e.target.value));
	}

	return (
		<select onChange={(e) => handleFilterCreated(e)}>
			<option value='All'> Originales o Creados </option>
			<option value='original'> Originales </option>
			<option value='created'> Creados </option>
		</select>
	);
}

export function ByAlphabet(todo) {
	const dispatch = useDispatch();
	let { setCurrentPage, setOrden } = todo;

	function handleFilterByAlphabet(e) {
		e.preventDefault();
		dispatch(filteredAlphabetycally(e.target.value));
		setCurrentPage(1);
		setOrden(`Ordenado ${e.target.value}`);
	}

	return (
		<select onChange={(e) => handleFilterByAlphabet(e)}>
			<option value='All'>Ordenar Alfabeticamente</option>
			<option value='asc'>Ascendente</option>
			<option value='desc'>Descendente</option>
		</select>
	);
}
export function BySpecie(obj) {
	const dispatch = useDispatch();
	const { allSpecies } = obj;

	function handleFilterTypes(e) {
		dispatch(filteredBySpecie(e.target.value));
	}

	return (
		<select onChange={(e) => handleFilterTypes(e)}>
			<option value='All'> Especie </option>
			{allSpecies.length
				? allSpecies.map((or) => {
						return (
							<option key={or} value={or}>
								{or}
							</option>
						);
				  })
				: allSpecies}
		</select>
	);
}
