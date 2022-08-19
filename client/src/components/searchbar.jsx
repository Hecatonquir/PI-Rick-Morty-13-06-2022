import { React, useState } from 'react';
import Button from 'react-bootstrap/Button';
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
			<Button
				variant='outline-secondary'
				id='button-addon2'
				type='submit'
				onClick={(e) => handleSearch(e)}>
				Search
			</Button>
		</InputGroup>
	);
}
/* <Form>
			<Row>
				<Col md={6}>
					<Form.Group className='mb-3 text-white' controlId='formBasicPassword'>
						<Form.Control
							type='input'
							onChange={(e) => handleChange(e)}
							value={searchInput}
							placeholder='Search Character'
						/>
					</Form.Group>
				</Col>
				<Col md={6}>
					<Button variant='outline-light' type='submit' onClick={(e) => handleSearch(e)}>
						Search
					</Button>
				</Col>
			</Row>
		</Form> */
