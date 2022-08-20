/* eslint-disable no-unused-vars */
/* eslint-disable no-lone-blocks */
import React, { useEffect, useState } from 'react';
/* import { useHistory } from 'react-router-dom'; */
import { useDispatch, useSelector } from 'react-redux';
import { createNewCharacter, getCharacters, getEpisodes } from '../redux/actions';

import control from './09-control.jsx';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './styles/04-Create.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarBootstrap from './02-Navbar';

export default function NewRecipe() {
	const dispatch = useDispatch();
	const episodes = useSelector((state) => state.episodes);
	/* const History = useHistory(); */
	const [verif, setVerif] = useState({});

	const ALLCharacters = useSelector((state) => state.allCharacters);

	const species = [...new Set(ALLCharacters.length ? ALLCharacters.map((char) => char.species) : '')];

	let [localInput, setLocalInput] = useState({
		name: '',
		origin: '',
		image: '',
		species: '',
		episode: [],
	});

	useEffect(() => {
		dispatch(getCharacters());
		dispatch(getEpisodes());
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	let handleInputChange = (e) => {
		setLocalInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
		setVerif(
			control({
				...localInput,
				[e.target.name]: e.target.value,
			})
		);
	};

	let handleCheckBox = (e) => {
		if (!localInput.species.includes(e.target.value)) {
			setLocalInput({
				...localInput,
				species: e.target.value,
			});
		} else {
			setLocalInput({
				...localInput,
				species: '',
			});
		}
	};

	let handleSelect = (e) => {
		if (!localInput.episode.includes(e.target.value)) {
			setLocalInput({
				...localInput,
				episode: [...localInput.episode, e.target.value],
			});
		} else {
			setLocalInput({
				...localInput,
				episode: localInput.episode.filter((d) => d !== e.target.value),
			});
		}
	};

	let handleSubmit = async (e) => {
		console.log(localInput);
		e.preventDefault();
		if (verif.check === 'bien') {
			dispatch(createNewCharacter(localInput));
			setLocalInput({
				name: '',
				origin: '',
				image: '',
				species: [],
				episode: [],
			});
			alert('Personaje Creado!');
		} else {
			alert('Tiene que insertar los datos correctamente!');
		}
	};

	return (
		<div>
			<header>{<NavbarBootstrap />}</header>
			<main className='mainCrear mt-5'>
				<Container className='Crear  justify-content-center text-info mt-5 pt-3'>
					<Container className='   '>
						<Row className='m-1'>
							<h1 className='Crear'> ¡Create your own Character! </h1>
						</Row>
						<Row className='m-1 '>
							<Form onSubmit={(e) => handleSubmit(e)}>
								<Form.Group className='mb-3'>
									<Form.Label>Name:</Form.Label>
									<Form.Control
										type='text'
										name='name'
										value={localInput.name}
										onChange={(e) => handleInputChange(e)}
										placeholder='Enter name'
									/>
									{verif?.name ? <p className='verif'>{verif.name}</p> : null}
								</Form.Group>

								<Form.Group className='mb-3'>
									<Form.Label>Origin:</Form.Label>
									<Form.Control
										type='text'
										name='origin'
										value={localInput.origin}
										onChange={(e) => handleInputChange(e)}
										placeholder='Enter Place Of Origin'
									/>
									{verif?.origin ? <p className='verif'>{verif.origin}</p> : null}
								</Form.Group>

								<Form.Group className='mb-3'>
									<Form.Label>Image:</Form.Label>
									<Form.Control
										type='text'
										name='image'
										value={localInput.image}
										onChange={(e) => handleInputChange(e)}
										placeholder='Enter An Image URL'
									/>
									{verif?.image ? <p className='verif'>{verif.image}</p> : null}
								</Form.Group>

								<Form.Group className='mb-3'>
									<Row>
										<Col>
											<Form.Label>Species:</Form.Label>
										</Col>
										{species.map((d) => {
											return (
												<Col key={d} className='mt-1'>
													<Form.Check
														type='radio'
														label={d}
														name='species'
														value={d}
														onChange={(e) => handleCheckBox(e)}
													/>
												</Col>
											);
										})}
									</Row>
									<Form.Control
										type='text'
										name='species'
										value={localInput.species ? `Selected Species: ${localInput.species}` : ''}
										onChange={(e) => handleInputChange(e)}
										placeholder='Enter a Species'
										disabled
									/>
								</Form.Group>

								<Form.Group>
									<Row className='justify-content-start'>
										<Col>
											<Form.Label>Episodes: </Form.Label>
										</Col>
										<Col>
											<Form.Select onChange={(e) => handleSelect(e)} className='p-1'>
												{episodes.map((d) => {
													return (
														<option key={d.id} value={d.name} className='mt-3'>
															{d.id}º {d.name}
														</option>
													);
												})}
											</Form.Select>
										</Col>
									</Row>
									<Form.Control
										type='text'
										name='episode'
										value={localInput.episode ? `Selected Episodes: ${localInput.episode} ` : ''}
										onChange={(e) => handleInputChange(e)}
										placeholder='Select The Episodes where this character appeared'
										disabled
									/>
								</Form.Group>

								<Button variant='light' type='submit' className='my-3 btn-outline-dark'>
									Create!
								</Button>
							</Form>
						</Row>
					</Container>
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

{
	/* 
			
			
			<div className='labels'>
				<label>Episodios: </label>
				<select onChange={(e) => handleSelect(e)}>
					{episodes.map((d) => {
						return (
							<option key={d.id} value={d.name}>
								{d.id}º: {d.name}
							</option>
						);
					})}
				</select>
			</div>
			<h3>
				{localInput.episode.length
					? 'Elegidos: ' + localInput.episode.map((e) => `${e}, `)
					: ''}
			</h3>
			<button type='submit'> CREAR </button>
		</form>
	</div>
</main> */
}
