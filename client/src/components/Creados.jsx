import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import * as A from '../redux/actions';
import Tarjeta from './Tarjeta';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavbarBootstrap from './02-Navbar';
import Button from 'react-bootstrap/Button';

import './styles/creados.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Creados() {
	const dispatch = useDispatch();
	const AllCharacters = useSelector((state) => state.characters);
	const createdChar = AllCharacters.filter((char) => char.created);
	console.log('🟢🟢🟢 / file: Creados.jsx / line 12 / Creados / createdChar', createdChar);
	useEffect(() => {
		dispatch(A.getCharacters());
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className='text-center mt-5'>
			<header className='text-center mb-5'>{<NavbarBootstrap />}</header>
			<main className='creados mt-5'>
				<Container className='text-center mt-5 pt-5' style={{ minHeight: '100vh' }}>
					{createdChar.length ? (
						<Row>
							{AllCharacters.map(
								(e) =>
									e.created && (
										<Col key={e.id} xxl={3} lg={4} md={6} xs={12}>
											<Tarjeta
												id={e.id}
												image={e.image}
												name={e.name}
												origin={e.origin}
												species={e.species}
												episode={e.episodes}
												apiId={e.apiId}
											/>
										</Col>
									)
							)}
						</Row>
					) : (
						<Container className='text-center p-5' style={{ minHeight: '100vh' }}>
							<Row className='justify-content-center'>
								<img
									className='Loading-img'
									src='https://c.tenor.com/6Tc-POkXDgYAAAAC/epic-rick-and-morty.gif'
									alt='portal'
								/>
							</Row>
							<br />
							<Row>
								<Col>
									<h2 className='loading' style={{ width: '50%' }}>
										No Created Characters Exist Yet
									</h2>
								</Col>
							</Row>
							<Row>
								<h2 className='loading'> You Can Create One Clicking</h2>
							</Row>
							<Row className='justify-content-center'>
								<Button
									variant='light'
									href='/create'
									className='my-3 btn-outline-dark '
									style={{ width: '30%' }}>
									Here!
								</Button>
							</Row>
						</Container>
					)}
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
