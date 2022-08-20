import React from 'react';
import Navbar from './02-Navbar';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import './styles/error.css';

export default function Error() {
	return (
		<div>
			<main className='error' style={{ minHeight: '100vh' }}>
				<br />
				<Navbar />
				<Container className='mt-5'>
					<h2 id='errormsg' style={{ width: '37%' }}>
						Oops... This Page Doesn't Exist
					</h2>
					<img
						src='https://d2y5h3osumboay.cloudfront.net/tzwr44rofmk13qgwe29ijbdrqw9e'
						alt='error'
						style={{ borderRadius: '10px' }}
					/>

					<h2 style={{ marginLeft: '2.5rem' }}>
						<Button
							variant='light'
							href='/home'
							className='my-3 btn-outline-dark '
							style={{ width: '30%' }}>
							Back to Home
						</Button>
					</h2>
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
