import React from 'react';
import './styles/Tarjeta.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Dropdown from 'react-bootstrap/Dropdown';

export default function Tarjeta({ id, image, name, origin, species, episode, apiId }) {
	episode.sort((a, b) => (a.id > b.id ? 1 : -1));
	console.log('🟢🟢🟢 / file: Tarjeta.jsx / line 5 / Tarjeta / episode', episode);
	function capitalizeWords(name) {
		return name.replace(/(?:^|\s)\S/g, function (a) {
			return a.toUpperCase();
		});
	}
	let CapitalizedName = capitalizeWords(name);
	return (
		<Card style={{ width: '20rem' }} className='text-center bg-dark text-white m-1 p-1'>
			<Card.Img variant='top' src={image} />
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
				<Row className=' my-3 '>
					<Col>
						<Dropdown>
							<Dropdown.Toggle variant='secondary' id='dropdown-button-dark-example1'>
								Episodios
							</Dropdown.Toggle>
							<Dropdown.Menu>
								{episode.length ? (
									episode.map((epi) => {
										return (
											<Dropdown.ItemText key={epi.id}>
												{epi.id}º {epi.name}
											</Dropdown.ItemText>
										);
									})
								) : (
									<Dropdown.ItemText>No se encontraron episodios</Dropdown.ItemText>
								)}
							</Dropdown.Menu>
						</Dropdown>
					</Col>
					<Col>
						<Button variant='primary'>Detail</Button>
					</Col>
				</Row>
			</Card.Body>
		</Card>
	);
}
// eslint-disable-next-line no-lone-blocks
{
	/* <div className='Tarjeta'>
			<Container>
				<Row>
					<Image src={image} alt={name}  width='200px' height='250px'  fluid rounded />
				</Row>
				<Row>
					<h2>
						Nº {apiId ? apiId : id.slice(0, 4)}: {CapitalizedName}
					</h2>
				</Row>
				<Row>
					<h3>Origen: {origin}</h3>
				</Row>
				<Row>
					<h3>Especie: {species}</h3>
				</Row>
				<Row>
					<h3>
						Episodios:{' '}
						{episode?.length > 2
							? episode
									.map((e) => e.name)
									.slice(0, 1)
									.join(' \\ ') + ' \\ y muchos más!'
							: episode?.map((e) => e.name)}
					</h3>
				</Row>
			</Container>
		</div> */
}
