const axios = require('axios');
const { Character, Episode } = require('../db.js');

async function getApiCharacters() {
	try {
		/* ESTO SÖLO ME TRAE LA PRIMERA TANDA, NECESITO HACER UN MAP CON TODAS LAS PAGINAS Y RECIËN AHI LLAMAR LOS CHARACTER */
		let pages = [];

		//let apiData = await axios.get(`https://rickandmortyapi.com/api/character`);

		/* while (apiData.data.info.next) {
			pages.push(apiData.data.results);
			apiData = await axios.get(apiData.data.info.next);
		} */ let apiData;
		for (let i = 1; i <= 5; i++) {
			apiData = await axios.get(`https://rickandmortyapi.com/api/character?page=${i}`);
			pages.push(apiData.data.results);
		}
		//console.log('🟢🟢🟢 / file: Character.js / line 23 / getApiCharacters / pages', pages);

		let characters = await pages.map((characters) => {
			return characters.map(async (char) => {
				let episodePromises = char.episode.map((epi) => axios.get(epi));
				let solvedPromises = await Promise.all(episodePromises);
				let epinames = solvedPromises.map((solved) => ({ id: solved.data.id, name: solved.data.name }));
				let character = {
					apiId: char.id,
					name: char.name,
					species: char.species,
					origin: char.origin.name,
					image: char.image,
					apiEpisodes: epinames,
					created: false,
				};
				return character;
			});
		});

		/* characters terminó siendo un arreglo de promesas, por eso le hago Promise.all */
		let characters2 = await Promise.all(characters.map(async (char) => await Promise.all(char)));
		/* console.log(
			'💥💥💥🟢🟢🟢 / file: Character.js / line 42 / getApiCharacters / characters2:\n',
			characters2
		); */

		var promises = await characters2.map((character) =>
			character.map((char) => {
				Character.findOrCreate({
					where: char,
				});
			})
		);
		//console.log('🟢🟢🟢 / file: Character.js / line 39 / getApiCharacters / promises', promises);

		/* let solvedPromises = await Promise.all(promises);

		characters.map(async (char, i) => {
			let apiEpisodesXdbEpisodes = await Episode.findAll({
				where: { name: char.episodes },
			});
			solvedPromises[i][0].addEpisode(apiEpisodesXdbEpisodes);
		});
 */
		console.log('Characters loaded to Db');
	} catch (error) {
		console.log(
			'💥💥💥 / file: Character.js / line 67 / getApiCharacters / error.message ->',
			error.message
		);
	}
}

async function getDbCharacters(req, res) {
	try {
		let dbCharacters = await Character.findAll({
			include: {
				model: Episode,
				attributes: ['name', 'id'],
				through: {
					attributes: [],
				},
			},
			order: [['apiId', 'ASC']],
		});

		res.send(dbCharacters);
	} catch (error) {
		console.log('💥💥💥 / file: Character.js / line 33 / getDbCharacters / error', error.stack);
		res.status(error.status || 500).send(error.message);
	}
}

const newCharacter = async (req, res) => {
	let { name, species, origin, image, episode } = req.body;
	//console.log('🟢🟢🟢 / file: Character.js / line 74 / newCharacter / req.body', req.body);
	name = name.toLowerCase();
	console.log('🟢🟢🟢 / file: Character.js / line 77 / newCharacter / name', name);

	try {
		let createCharacter = await Character.create({ name, species, origin, image });
		let checkEpisode = await Episode.findAll({
			where: { name: episode },
		});
		console.log(
			'🟢🟢🟢 / file: Character.js / line 79 / newCharacter / createCharacter:\n',
			createCharacter
		);
		createCharacter.addEpisode(checkEpisode);

		res.send('Character creado correctamente');
	} catch (error) {
		console.log('💥💥💥/ file: Character.js / line 90 / newCharacter / error:\n', error);

		res.send('No se pudo crear el personaje ');
	}
};
const AllOrigins = async (req, res) => {
	try {
		let allchar = await ALLCharacters();
		let AllOrigins = [...new Set(allchar.map((char) => char.origin))];
		res.send(AllOrigins);
	} catch (error) {
		res.send(error);
	}
};

module.exports = { getApiCharacters, getDbCharacters, newCharacter, AllOrigins };
