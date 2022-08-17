import React from 'react';
import './styles/Navbar.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function NavbarBootstrap() {
	return (
		<Navbar bg='light' expand='lg'>
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

/* 	<nav>
			<ul className='navBar'>
				<li key='1'>
					<NavLink to='/home'> Home </NavLink>
				</li>
				<li key='2'>
					<NavLink to='/create'> Crear Personaje </NavLink>
				</li>
				<li key='3'>
					<NavLink to='/creados'> Personajes Creados </NavLink>
				</li>
			</ul>
		</nav> */
