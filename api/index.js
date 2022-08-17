const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const { getApiCharacters } = require('./src/Functions/Character.js');
const { getApiEpisodes } = require('./src/Functions/Episodes.js');

// Syncing all the models at once.

// Para la precarga cuando se levanta el server, ejecutar la funcion getEpisodes(). Al ser una peticion vamos a usar async await.

conn.sync({ force: true }).then(async () => {
	server.listen(process.env.PORT, () => {
		console.log(`%s listening at ${process.env.PORT}`); // eslint-disable-line no-console
	});
	await getApiEpisodes();
	await getApiCharacters();
});
