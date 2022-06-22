import axios from 'axios';

export function getCharacters() {
	return async (dispatch) => {
		return await axios
			.get('http://localhost:3001/characters')
			.then((res) => dispatch({ type: 'GET_CHARACTERS', payload: res.data }))
			.catch('Hubo un ERROR en action getCharacters');
	};
}

export function getEpisodes() {
	return async (dispatch) => {
		return await axios
			.get('http://localhost:3001/episodes')
			.then((res) => dispatch({ type: 'GET_EPISODES', payload: res.data }))
			.catch('Hubo un ERROR en action getEpisodes');
	};
}

export function createNewCharacter(info) {
	return async () => {
		return await axios({
			method: 'post',
			url: 'http://localhost:3001/newcharacter',
			data: info,
		});
	};
}

export function getCharactersByName(name) {
	return async (dispatch) => {
		return await axios
			.get(`http://localhost:3001/characters?name=${name}`)
			.then((res) => dispatch({ type: 'GET_CHARACTERS_BY_NAME', payload: res.data }))
			.catch('Hubo un ERROR en action getCharactersByName');
	};
}

export function getOrigins() {
	return async (dispatch) => {
		return await axios
			.get(`http://localhost:3001/origin`)
			.then((res) => dispatch({ type: 'GET_CHARACTERS_BY_ORIGIN', payload: res.data }))
			.catch('Hubo un ERROR en action getCharactersByName');
	};
}
export function filterByOrigin(payload) {
	return { type: 'FILTER_BY_ORIGIN', payload };
}
export function filterCreatedCharacters(payload) {
	return { type: 'FILTER_CREATED', payload };
}
export function filteredAlphabetycally(payload) {
	return { type: 'FILTER_ALPHABETICALLY', payload };
}export function filteredBySpecie(payload) {
	return { type: 'FILTER_BY_SPECIE', payload };
}