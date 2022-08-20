import React from 'react';
import { useDispatch } from 'react-redux';
import Form from 'react-bootstrap/Form';

import {
	filterByOrigin,
	filterCreatedCharacters,
	filteredAlphabetycally,
	filteredBySpecie,
} from '../redux/actions';

export function ByOrigin(obj) {
	const dispatch = useDispatch();
	const { allOrigins, value } = obj;

	function handleFilterTypes(e) {
		dispatch(filterByOrigin(e.target.value));
	}

	return (
		<Form.Select onChange={(e) => handleFilterTypes(e)}>
			<option value={value || 'All'}>Order by Origin</option>
			{allOrigins.length
				? allOrigins.map((or) => {
						return (
							<option key={or} value={or}>
								{or}
							</option>
						);
				  })
				: allOrigins}
		</Form.Select>
	);
}

export function Created() {
	const dispatch = useDispatch();

	function handleFilterCreated(e) {
		dispatch(filterCreatedCharacters(e.target.value));
	}

	return (
		<Form.Select onChange={(e) => handleFilterCreated(e)}>
			<option value='All'> Show Original / Created </option>
			<option value='original'> Original </option>
			<option value='created'> Created </option>
		</Form.Select>
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
		<Form.Select onChange={(e) => handleFilterByAlphabet(e)}>
			<option value='All'>Order Alphabetically</option>
			<option value='asc'>A-Z</option>
			<option value='desc'>Z-A</option>
		</Form.Select>
	);
}
export function BySpecie(obj) {
	const dispatch = useDispatch();
	const { allSpecies } = obj;

	function handleFilterTypes(e) {
		dispatch(filteredBySpecie(e.target.value));
	}

	return (
		<Form.Select onChange={(e) => handleFilterTypes(e)}>
			<option value='All'> Order by Species </option>
			{allSpecies.length
				? allSpecies.map((or) => {
						return (
							<option key={or} value={or}>
								{or}
							</option>
						);
				  })
				: allSpecies}
		</Form.Select>
	);
}
