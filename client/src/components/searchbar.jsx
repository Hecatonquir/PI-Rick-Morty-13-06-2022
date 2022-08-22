import { React, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useDispatch } from 'react-redux';
import { getCharactersByName } from '../redux/actions';

export default function SearchBar() {
	const dispatch = useDispatch();
	let [searchInput, setSearchInput] = useState('');

	const handleChange = (e) => {
		setSearchInput(e.target.value);
		e.preventDefault();
		dispatch(getCharactersByName(searchInput));
	};

	const handleSearch = (e) => {
		//console.log('🟢🟢🟢 / file: searchbar.jsx / line 11 / SearchBar / searchInput:', searchInput);
		e.preventDefault();
		dispatch(getCharactersByName(searchInput));
		setSearchInput('');
	};

	return (
		<InputGroup className='mb-3'>
			<Form.Control
				placeholder='Search By Name'
				aria-label="Recipient's username"
				aria-describedby='basic-addon2'
				type='input'
				onChange={(e) => handleChange(e)}
				value={searchInput}
			/>
			<Button variant='outline-light' id='button-addon2' type='submit' onClick={(e) => handleSearch(e)}>
				Search
			</Button>
		</InputGroup>
	);
}
