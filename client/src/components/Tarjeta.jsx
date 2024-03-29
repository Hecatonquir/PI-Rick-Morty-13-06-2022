import React from 'react';
//import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
//import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Dropdown from 'react-bootstrap/Dropdown';
import './styles/Tarjeta.css';

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
		<Card
			style={{ width: '100%', height: '98%' }}
			className='text-center bg-dark text-white m-1 p-1 pb-0 shadow-lg justify-content-center'>
			<Card.Img variant='top' src={`${image}`} style={{ height: '15rem', objectFit: 'cover' }} />
			<Card.Body>
				<Row>
					<Card.Title className='Title'>{CapitalizedName}</Card.Title>
				</Row>
				<br />
				<Row className='mb-2' 	style={{ width: '100%', height: '24%' }}>
					<Card.Text className='text-start'>Origin: {origin}</Card.Text>
				</Row>
				
				<Row className='mb-2'>
					<Card.Text className='text-start'>Species: {species}</Card.Text>
				</Row>
				<Row className='Buttons'>
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
												Nº{epi.id}: {epi.name}
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
