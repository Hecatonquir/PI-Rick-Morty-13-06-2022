import React from 'react';
import './styles/Navbar.css';
//import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function NavbarBootstrap() {
	let path = window.location.pathname;
	//console.log('🟢🟢🟢 / file: 02-Navbar.jsx / line 12 / NavbarBootstrap / path', path);

	return (
		<Container className='mb-3'>
			<Navbar expand='sm' fixed='top' bg='dark' variant='dark'>
				<Navbar.Brand href='/'>
					<img
						alt='logo'
						src='https://realtimevfx.com/uploads/default/original/2X/9/9cf050de0c5e99bf7e0914a55416f054ff9e0872.gif'
						width='30'
						height='30'
						className='d-inline-block align-top'
					/>
					Rick & Morty
				</Navbar.Brand>
				<Navbar.Toggle aria-controls='responsive-navbar-nav' />
				<Navbar.Collapse id='responsive-navbar-nav' className='justify-content-center'>
					<Nav navbarScroll variant='pills' bg='light' text='dark'>
						<Nav.Link
							href='/home'
							className={path === '/home' ? 'active' : ''}
							style={path === '/home' ? { backgroundColor: 'grey' } : { backgroundColor: 'dark' }}
							//style={{ backgroundColor: 'grey' }}
						>
							Home
						</Nav.Link>
						<Nav.Link
							href='/create'
							className={path === '/create' ? 'active' : false}
							style={path === '/create' ? { backgroundColor: 'grey' } : { backgroundColor: 'dark' }}>
							Create New Character
						</Nav.Link>
						<Nav.Link
							href='/creados'
							className={path === '/creados' ? 'active' : false}
							style={path === '/creados' ? { backgroundColor: 'grey' } : { backgroundColor: 'dark' }}>
							See Created Characters
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</Container>
	);
}
// eslint-disable-next-line no-lone-blocks
{
	/* <Nav style={{ maxHeight: '100px' }} navbarScroll 			variant='pills' defaultActiveKey='/home'>
						<Nav.Item>
							<Nav.Link href='/home' >Home</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link href='/create' eventKey='/create'>
								Crear Personaje
							</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link href='/creados'eventKey='/creados'>
								Personajes Creados
							</Nav.Link>
						</Nav.Item>
					</Nav> */
}
