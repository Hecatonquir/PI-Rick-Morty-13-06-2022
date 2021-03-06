import React, { useEffect, useState } from 'react';
/* import { useHistory } from 'react-router-dom'; */
import { useDispatch, useSelector } from 'react-redux';
import { createNewCharacter, getEpisodes } from '../redux/actions';
import control from './09-control.jsx';
import './styles/04-Create.css';

export default function NewRecipe() {
	const dispatch = useDispatch();
	const episodes = useSelector((state) => state.episodes);
	/* const History = useHistory(); */
	const [verif, setVerif] = useState({});
	const species = ['Humano', 'Alien', 'Unknown', 'Desc'];

	let [localInput, setLocalInput] = useState({
		name: '',
		origin: '',
		image: '',
		species: '',
		episode: [],
	});

	useEffect(() => {
		dispatch(getEpisodes());
	}, [dispatch]);

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
		<main className='mainCrear'>
			<div className='Crear'>
				<br />
				<h1 className='Crear'> ¡Crea tu propio Personaje! </h1>
				<form className='Crear' onSubmit={(e) => handleSubmit(e)}>
					<div className='labels'>
						<label>Nombre: </label>
						<input
							type='text'
							name='name' /* este nombre tiene que ser igual al del local state que queremos cambiar */
							value={localInput.name}
							onChange={(e) => handleInputChange(e)}
						/>
						{verif?.name ? <p className='verif'>{verif.name}</p> : null}
					</div>
					<div className='labels'>
						<label>Origen: </label>
						<input
							type='text'
							name='origin'
							value={localInput.origin}
							onChange={(e) => handleInputChange(e)}
						/>
						{verif?.origin ? <p className='verif'>{verif.origin}</p> : null}
					</div>
					<div className='labels'>
						<label>Imagen: </label>
						<input
							type='text'
							name='image'
							value={localInput.image}
							onChange={(e) => handleInputChange(e)}
						/>
						{verif?.image ? <p className='verif'>{verif.image}</p> : null}
					</div>
					<div className='labels'>
						<label>Especie: </label>
						<ul className='checkbox'>
							{species.map((d) => {
								return (
									<li className='checkbox' key={d}>
										{d}
										<input
											type='checkbox'
											name='species'
											value={d}
											onChange={(e) => handleCheckBox(e)}
										/>
									</li>
								);
							})}
						</ul>
					</div>
					<h3>{localInput.species ? 'Elegido: ' + localInput.species : ''}</h3>
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
		</main>
	);
}
