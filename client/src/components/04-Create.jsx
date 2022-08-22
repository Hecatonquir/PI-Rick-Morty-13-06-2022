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
import NavbarBootstrap from './02-Navbar';

import './styles/04-Create.css';
import 'bootstrap/dist/css/bootstrap.min.css';

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
		//console.log('🟢🟢🟢 / file: 04-Create.jsx / line 45 / handleInputChange / localInput:', localInput);

		setVerif(
			control({
				...localInput,
				[e.target.name]: e.target.value,
			})
		);
	};

	let handleSelect = (e) => {
		if (!localInput.episode.includes(e.target.value)) {
			setLocalInput((prev) => ({ ...prev, episode: [...localInput.episode, e.target.value] }));
		} else {
			setLocalInput({
				...localInput,
				episode: localInput.episode.filter((d) => d !== e.target.value),
			});
		}
		setVerif(
			control({
				...localInput,
				episode: [...localInput.episode, e.target.value],
			})
		);
		//console.log('🟢🟢🟢 / file: 04-Create.jsx / line 45 / handleInputChange / localInput:', localInput);
	};

	let handleSubmit = async (e) => {
		console.log('🟢🟢🟢 / file: 04-Create.jsx / line 83 / handleSubmit / localInput', localInput);
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
			alert('New Character Created!');
		} else {
			alert('Please insert all inputs!');
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
									<Row>
										<Col>
											<Form.Control
												type='text'
												name='name'
												value={localInput.name}
												onChange={(e) => handleInputChange(e)}
												placeholder='Enter name'
											/>
										</Col>
										<Col>{verif?.name ? <p className='verif'>{verif.name}</p> : null}</Col>
									</Row>
								</Form.Group>

								<Form.Group className='mb-3'>
									<Form.Label>Origin:</Form.Label>
									<Row>
										<Col>
											<Form.Control
												type='text'
												name='origin'
												value={localInput.origin}
												onChange={(e) => handleInputChange(e)}
												placeholder='Enter Place Of Origin'
											/>
										</Col>
										<Col>{verif?.origin ? <p className='verif'>{verif.origin}</p> : null}</Col>
									</Row>
								</Form.Group>

								<Form.Group className='mb-3'>
									<Form.Label>Image:</Form.Label>
									<Row>
										<Col>
											<Form.Control
												type='text'
												name='image'
												value={localInput.image}
												onChange={(e) => handleInputChange(e)}
												placeholder='Enter An Image URL'
											/>
										</Col>
										<Col>{verif?.image ? <p className='verif'>{verif.image}</p> : null}</Col>
									</Row>
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
														onChange={(e) => handleInputChange(e)}
													/>
												</Col>
											);
										})}
									</Row>
									<Row>
										<Col>
											<Form.Control
												type='text'
												name='species'
												value={localInput.species ? `${localInput.species}` : ''}
												onChange={(e) => handleInputChange(e)}
												placeholder='Enter a Species'
												disabled
											/>
										</Col>
										<Col>{verif?.species ? <p className='verif'>{verif.species}</p> : null}</Col>
									</Row>
								</Form.Group>

								<Form.Group>
									<Row className='justify-content-start'>
										<Col>
											<Form.Label>Episodes: </Form.Label>
										</Col>
										<Col>
											<Form.Select onChange={(e) => handleSelect(e)} className='p-1'>
												<option className='mt-3' hidden>
													Episodes
												</option>
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
									<Row>
										<Col>
											<Form.Control
												type='text'
												name='episode'
												value={localInput.episode ? ` ${localInput.episode.join(', ')}` : ''}
												onChange={(e) => handleInputChange(e)}
												placeholder='Select The Episodes where this character appeared'
												disabled
											/>
										</Col>
										<Col>{verif?.episode ? <p className='verif'>{verif.episode}</p> : null}</Col>
									</Row>
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
