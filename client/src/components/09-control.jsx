export default function control(localInput) {
	let verif = [];
	verif.check = 'mal';
	if (!localInput.name) {
		verif.name = 'Insert Character Name';
	} else if (!localInput.origin) {
		verif.origin = 'Insert Origin';
	} else if (!localInput.image) {
		verif.image = 'Insert an Image';
	} else if (!localInput.species) {
		verif.species = 'Select a Species';
	} else if (!localInput.episode.length) {
		verif.episode = 'Select Episodes';
	} else verif.check = 'bien';
	return verif;
}
