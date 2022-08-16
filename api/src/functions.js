const axios = require("axios");
const { Character, Episode } = require("./db.js");

const apiCharacters = async function (req, res) {
	try {
		const collectNCharacters = [];

		for (let i = 1; i < 2; i++) {
			let promise = await axios.get(`https://rickandmortyapi.com/api/character/?page=${i}`);
			collectNCharacters.push(promise);
		}
		const AllCharacters = collectNCharacters.map((el) => el.data.results).flat();
		const apiCharacter = AllCharacters.map(async (char) => {
			const promesa = async function promises() {
				const unresolved = char.episode.map(async (epi_url) => {
					const dataEpisodios = await axios.get(`${epi_url}`);
					const nombreEpisodios = dataEpisodios.data.name;
					return nombreEpisodios;
				});
				const resolved = await Promise.all(unresolved);

				return resolved;
			};
			const nombreDeEpisodios = await promesa();
			return {
				apiId: char.id,
				name: char.name.toLowerCase(),
				species: char.species,
				origin: char.origin.name,
				image: char.image,
				episode: nombreDeEpisodios,
				createdInDb: false,
			};
		});
		const resolved2 = await Promise.all(apiCharacter);
		//console.log("🐲🐲🐲 / file: functions.js / line 35 / resolved2", resolved2);

		return resolved2;
	} catch (error) {
		return error;
	}
};
const dbCharacters = async function (req, res) {
	const created_Characters = await Character.findAll({
		include: {
			model: Episode,
			attributes: ["name"],
		},
	});
	created_Characters.map((e) => {
		e.dataValues["episode"] = e.dataValues["episodes"].map((e) => e.dataValues.name);
		delete e.dataValues["episodes"];
	});

	return created_Characters.map((e) => e.dataValues);
};
const ALLCharacters = async function (req, res) {
	try {
		const api_Characters = await apiCharacters();
		api_Characters.map((e) => {
			Character.findOrCreate({ where: e });
		});
		const api_Characters2 = await Character.findAll();
		return api_Characters2;
	} catch (error) {
		return error;
	}
};

const getCharacters2 = async (req, res) => {
	try {
		var allCharacters = await ALLCharacters();
		allCharacters = allCharacters?.map((char) => char.dataValues);
		//console.log("🐲🐲🐲 / file: functions.js / line 77 / allCharacters", allCharacters);
		return allCharacters ? allCharacters : "se rompiotodo";
	} catch (error) {
		console.log("🐲🐲🐲 / file: functions.js / line 79 / error:\n", error.message);
	}
};

const ALLCharacters2 = async function (req, res) {
	const { name } = req.query;
	try {
		let allchar = await await Character.findAll();
		if (name) allchar = allchar.filter((e) => e.name.includes(name.toLowerCase()));
		res.send(allchar);
	} catch (error) {
		res.send(error);
	}
};

const getEpisodes = async (rqe, res) => {
	try {
		const episodes = await axios.get("https://rickandmortyapi.com/api/episode");
		const episodes2 = episodes.data.results.map((e) => e.name);
		episodes2.map((e) => {
			Episode.findOrCreate({ where: { name: e.toLowerCase() } });
		});
		const allEpisodes = await Episode.findAll();
		return allEpisodes;
	} catch (error) {
		return error;
	}
};
const getEpisodes2 = async (req, res) => {
	const allEpisodes = await getEpisodes();
	res.send(allEpisodes);
};
const newCharacter = async (req, res) => {
	let { name, species, origin, image, episode } = req.body;
	name = name.toLowerCase();
	try {
		let createCharacter = await Character.create({ name, species, origin, image });
		let checkEpisode = await Episode.findAll({
			where: { name: episode.map((e) => e.toLowerCase()) },
		});
		aventura.addPais(paises);
		createCharacter.addEpisode(checkEpisode);
		res.send("Character creado correctamente");
	} catch (error) {
		res.send("No se pudo crear el personaje ");
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

module.exports = { ALLCharacters2, getEpisodes, getEpisodes2, newCharacter, AllOrigins, getCharacters2 };
