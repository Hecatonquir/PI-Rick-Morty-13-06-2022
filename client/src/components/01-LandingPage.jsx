import React from 'react';
import { Link } from 'react-router-dom';
import './styles/landingPage.css';

export default function LandingPage() {
	return (
		<main className='landing1'>
			<br />
			<section className='landing2'>
				<h1 className='titulo'> Bienvenido a mi Api de Rick & Morty! </h1>
				<button className='boton'>
					<Link className='linke' to={'/home'}>
						<h2 className=''>Ingresar</h2>
					</Link>
				</button>
			</section>
		</main>
	);
}
