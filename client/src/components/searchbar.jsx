import { React, useState } from 'react';
import { useDispatch } from 'react-redux';

import { getCharactersByName } from '../redux/actions';

export default function SearchBar() {
	const dispatch = useDispatch();
	let [searchInput, setSearchInput] = useState('');

	const handleChange = (e) => {
		setSearchInput(e.target.value);
	};

	const handleSearch = (e) => {
		e.preventDefault();
		dispatch(getCharactersByName(searchInput));
		setSearchInput('');
	};

	return (
		<>
			<input type='text' onChange={(e) => handleChange(e)} placeholder='Buscar Personaje...' value={searchInput} />
			<button type='submit' onClick={(e) => handleSearch(e)}>
				Buscar
			</button>
		</>
	);
}
