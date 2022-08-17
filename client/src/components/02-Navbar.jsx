import React from 'react';
import './styles/Navbar.css';
//import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function NavbarBootstrap() {
	return (
		<Navbar bg='light' expand='lg' fixed='top'>
			<Container fluid>
				<Navbar.Brand href='/'>Rick & Morty!</Navbar.Brand>
				<Navbar.Toggle aria-controls='navbarScroll' />
				<Navbar.Collapse id='navbarScroll'>
					<Nav className='me-auto my-2 my-lg-0' style={{ maxHeight: '100px' }} navbarScroll>
						<Nav.Link href='/home'>Home</Nav.Link>
						<Nav.Link href='/create'>Crear Personaje</Nav.Link>
						<Nav.Link href='/creados'>Personajes Creados</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}
