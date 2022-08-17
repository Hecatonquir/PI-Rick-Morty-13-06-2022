import React from 'react';
import './styles/landingPage.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function LandingPage() {
	return (
		<main className='landing1'>
			<br />
			<section className='landing2'>
				<h1 className='titulo'> Bienvenido a mi Api de Rick & Morty! </h1>
				<Button variant='outline-dark' size='lg' href='/home'>
					Ingresar
				</Button>
			</section>
		</main>
	);
}
