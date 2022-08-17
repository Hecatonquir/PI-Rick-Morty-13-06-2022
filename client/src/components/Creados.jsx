import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import * as A from '../redux/actions';
import Tarjeta from './Tarjeta';
import './styles/creados.css';
import Navbar from './02-Navbar';
export default function Creados() {
	const dispatch = useDispatch();
	const AllCharacters = useSelector((state) => state.characters);
	const createdChar = AllCharacters.filter((char) => char.created);
	console.log('💥💥💥🟢🟢🟢 / file: Creados.jsx / line 12 / Creados / createdChar', createdChar);
	useEffect(() => {
		dispatch(A.getCharacters());
	}, [dispatch]);

	return (
		<main className='creados'>
			<br />
			<Navbar />
			{AllCharacters.length ? (
				<section className='Tarjetas'>
					{AllCharacters.map((e) => {
						if (e.created) {
							return <Tarjeta key={e.id} id={e.id} image={e.image} name={e.name} origin={e.origin} species={e.species} episode={e.episodes} />;
						} else return '';
					})}
				</section>
			) : (
				<div className='loading'>
					<img className='loading' src='https://c.tenor.com/6Tc-POkXDgYAAAAC/epic-rick-and-morty.gif' alt='portal' />
					<h2 className='loading'> Loading...</h2>
				</div>
			)}
		</main>
	);
}
