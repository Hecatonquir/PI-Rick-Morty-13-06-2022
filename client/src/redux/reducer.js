const initialState = {
	characters: [],
	episodes: [],
	allCharacters: [],
	origenes: [],
	idCharacter: {},
};

export default function rootReducer(state = initialState, action) {
	switch (action.type) {
		case 'GET_CHARACTERS':
			return {
				...state,
				characters: action.payload,
				allCharacters: action.payload,
			};
		case 'GET_EPISODES':
			return {
				...state,
				episodes: action.payload,
			};
		case 'GET_CHARACTERS_BY_NAME':
			let searchedChar = state.allCharacters.filter((char) =>
				char.name.toLowerCase().includes(action.payload.toLowerCase())
			);
			return {
				...state,
				characters: searchedChar.length ? searchedChar : 'No Coincidences Found',
			};
		case 'GET_CHARACTERS_BY_ORIGIN':
			return {
				...state,
				origenes: action.payload,
			};
		case 'FILTER_BY_ORIGIN':
			const allCharacters = state.allCharacters;

			const statusFiltered =
				action.payload === 'All'
					? allCharacters
					: allCharacters.filter((e) => e.origin === action.payload);
			return {
				...state,
				characters: statusFiltered,
			};
		case 'FILTER_CREATED':
			const allCharacters2 = state.allCharacters;
			const statusFiltered2 =
				action.payload === 'All'
					? allCharacters2
					: action.payload === 'original'
					? allCharacters2.filter((e) => typeof e.id !== 'number')
					: allCharacters2.filter((e) => typeof e.id === 'number');
			return {
				...state,
				characters: statusFiltered2,
			};
		case 'FILTER_ALPHABETICALLY':
			const Characters3 = state.characters;
			const statusFiltered3 =
				action.payload === 'All'
					? Characters3
					: action.payload === 'asc'
					? Characters3.sort((a, b) => a.name.localeCompare(b.name))
					: // O TAMBIEN PUEDO HACER 		(a.title > b.title ? 1 : -1)
					  Characters3.sort((a, b) => b.name.localeCompare(a.name));
			return {
				...state,
				characters: statusFiltered3,
			};
		case 'FILTER_BY_SPECIE':
			const Characters4 = state.characters;
			const statusFiltered4 =
				action.payload === 'All' ? Characters4 : Characters4.filter((e) => e.species === action.payload);
			return {
				...state,
				characters: statusFiltered4,
			};

		default:
			return state;
	}
}
