const axios = require('axios');
const { Character, Episode } = require('../db.js');

async function getApiEpisodes() {
	try {
		/* ESTO SÖLO ME TRAE LA PRIMERA TANDA, NECESITO HACER UN MAP CON TODAS LAS PAGINAS Y RECIËN AHI LLAMAR LOS CHARACTER */
		let apiData = await axios.get(`https://rickandmortyapi.com/api/episode`);
		let episodes = apiData.data.results.map((epi) => ({ id: epi.id, name: epi.name }));
		let promesis = episodes.map((epi) => Episode.findOrCreate({ where: epi }));
		Promise.all(promesis);
		console.log('Episodes loaded to DB');
	} catch (error) {
		console.log('💥💥💥 / file: Episodes.js / line 13 / getApiEpisodes / message->', error.message);
	}
}

async function getDbEpisodes(req, res) {
	try {
		const allEpisodes = await Episode.findAll();
		res.send(allEpisodes);
	} catch (error) {
		console.log('💥💥💥 / file: Episodes.js / line 22 / getDbEpisodes / error -->', error.message);
		res.status(error.status || 500).send(error.message);
	}
}

module.exports = { getApiEpisodes, getDbEpisodes };
