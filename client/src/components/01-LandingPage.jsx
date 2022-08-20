import React from 'react';
import './styles/landingPage.css';
import Button from 'react-bootstrap/Button';

export default function LandingPage() {
	return (
		<main className='landing1'>
			<br />
			<section className='landing2'>
				<h1 className='titulo'> Welcome To my Rick and Morty App! </h1>
				<Button variant='outline-dark' size='lg' href='/home'>
					Enter!
				</Button>
			</section>
		</main>
	);
}
