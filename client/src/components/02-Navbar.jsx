import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles/Navbar.css';

export default function Navbar() {
	return (
		<nav>
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
		</nav>
	);
}
