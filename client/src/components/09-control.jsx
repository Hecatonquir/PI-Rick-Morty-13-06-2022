export default function control(localInput) {
	let verif = [];
	verif.check = 'mal';
	if (!localInput.name) {
		verif.name = 'Insertar Nombre del personaje';
	} else if (!localInput.origin) {
		verif.origin = 'Insertar un Origen';
	} else if (!localInput.image) {
		verif.image = 'Insertá una imagen!!';
	} else verif.check = 'bien';
	return verif;
}
