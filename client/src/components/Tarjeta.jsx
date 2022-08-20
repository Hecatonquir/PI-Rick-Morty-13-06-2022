import React from 'react';
import './styles/Tarjeta.css';
//import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
//import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Dropdown from 'react-bootstrap/Dropdown';

export default function Tarjeta({ id, image, name, origin, species, episode, apiId }) {
	episode.sort((a, b) => (a.id > b.id ? 1 : -1));
	//console.log('🟢🟢🟢 / file: Tarjeta.jsx / line 5 / Tarjeta / episode', episode);
	function capitalizeWords(name) {
		return name.replace(/(?:^|\s)\S/g, function (a) {
			return a.toUpperCase();
		});
	}
	let CapitalizedName = capitalizeWords(name);
	return (
		<Card style={{ maxWidth: '15rem' }} className=' text-center bg-dark text-white m-1 p-1 shadow-lg '>
			<Card.Img variant='top' src={`${image}`} style={{ height: '15rem' }} />
			<Card.Body>
				<Row>
					<Card.Title>{CapitalizedName}</Card.Title>
				</Row>
				<Row>
					<Card.Text className='text-start'>Origen: {origin}</Card.Text>
				</Row>
				<Row>
					<Card.Text className='text-start'>Especie: {species}</Card.Text>
				</Row>
				<Row className='mt-3'>
					<Col>
						<Dropdown>
							<Dropdown.Toggle variant='secondary' id='navbarScrollingDropdown'>
								Episodes
							</Dropdown.Toggle>
							<Dropdown.Menu id='navbarScrollingDropdown'>
								{episode.length ? (
									episode.map((epi) => {
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
					</Col>
					<Col>
						<Button variant='outline-light' href={`/detail/${id}`}>
							Detail
						</Button>
					</Col>
				</Row>
			</Card.Body>
		</Card>
	);
}
