const server = require("./src/app.js");
const { conn } = require("./src/db.js");
const { getEpisodes, getCharacters2 } = require("./src/functions.js");

// Syncing all the models at once.

// Para la precarga cuando se levanta el server, ejecutar la funcion getEpisodes(). Al ser una peticion vamos a usar async await.

conn.sync({ force: false }).then(async () => {
	server.listen(process.env.PORT, () => {
		console.log(`%s listening at ${process.env.PORT}`); // eslint-disable-line no-console
	});
	await getEpisodes();
	await getCharacters2();
});
