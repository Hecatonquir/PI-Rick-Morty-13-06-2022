/* eslint-disable no-unused-vars */
/* eslint-disable no-lone-blocks */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCharacters } from '../redux/actions';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './styles/Detail.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import NavbarBootstrap from './02-Navbar';

export default function Detail(props) {
	const dispatch = useDispatch();
	const { id } = props.match.params;

	const ALLCharacters = useSelector((state) => state.allCharacters);

	const idCharacter = ALLCharacters.find((char) => (char.id = id));

	useEffect(() => {
		dispatch(getCharacters());
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className='justify-content-center text-center'>
			<header>{<NavbarBootstrap />}</header>
			<main className='mainDetail p-5 text-center justify-content-center'>
				<Container className=' text-info m-5 p-3 justify-content-center text-center'>
					<Card style={{ width: '70%' }}>
						<Card.Img variant='top' src={idCharacter?.image} style={{ height: '60vh' }} />
						<Card.Body>
							<Card.Title>{idCharacter?.name}</Card.Title>
							<Card.Text>
								Some quick example text to build on the card title and make up the bulk of the card's
								content.
							</Card.Text>
						</Card.Body>
						<ListGroup className='list-group-flush'>
							<ListGroup.Item>{idCharacter?.origin}</ListGroup.Item>
							<ListGroup.Item>{idCharacter?.species}</ListGroup.Item>
							<ListGroup.Item>
								<Dropdown>
									<Dropdown.Toggle variant='secondary' id='navbarScrollingDropdown'>
										Episodes
									</Dropdown.Toggle>
									<Dropdown.Menu id='navbarScrollingDropdown'>
										{idCharacter?.episodes?.length ? (
											idCharacter.episodes.map((epi) => {
												return (
													<Dropdown.ItemText key={epi.id}>
														{epi.id}º {epi.name}
													</Dropdown.ItemText>
												);
											})
										) : (
											<Dropdown.ItemText>No Episodes Found</Dropdown.ItemText>
										)}
									</Dropdown.Menu>
								</Dropdown>
							</ListGroup.Item>
						</ListGroup>
					</Card>
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
