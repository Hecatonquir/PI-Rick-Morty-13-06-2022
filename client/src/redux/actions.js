import axios from 'axios';

export function getCharacters() {
	return async (dispatch) => {
		return await axios
			.get('/characters')
			.then((res) => dispatch({ type: 'GET_CHARACTERS', payload: res.data }))
			.catch('Hubo un ERROR en action getCharacters');
	};
}

export function getEpisodes() {
	return async (dispatch) => {
		return await axios
			.get('/episodes')
			.then((res) => dispatch({ type: 'GET_EPISODES', payload: res.data }))
			.catch('Hubo un ERROR en action getEpisodes');
	};
}

export function createNewCharacter(info) {
	return async () => {
		return await axios({
			method: 'post',
			url: '/newcharacter',
			data: info,
		});
	};
}

export function getOrigins() {
	return async (dispatch) => {
		return await axios
			.get(`/origin`)
			.then((res) => dispatch({ type: 'GET_CHARACTERS_BY_ORIGIN', payload: res.data }))
			.catch('Hubo un ERROR en action getCharactersByName');
	};
}

export function getCharactersByName(name) {
	return { type: 'GET_CHARACTERS_BY_NAME', payload: name };
}
export function filterByOrigin(payload) {
	return { type: 'FILTER_BY_ORIGIN', payload };
}
export function filterCreatedCharacters(payload) {
	return { type: 'FILTER_CREATED', payload };
}
export function filteredAlphabetycally(payload) {
	return { type: 'FILTER_ALPHABETICALLY', payload };
}
export function filteredBySpecie(payload) {
	return { type: 'FILTER_BY_SPECIE', payload };
}
