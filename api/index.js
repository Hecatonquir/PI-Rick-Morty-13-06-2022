const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const { getApiCharacters } = require('./src/Functions/Character.js');
const { getApiEpisodes } = require('./src/Functions/Episodes.js');

// Syncing all the models at once.

conn.sync({ force: true }).then(async () => {
	server.listen(process.env.PORT, () => {
		console.log(`%s listening at ${process.env.PORT}`); // eslint-disable-line no-console
	});
	await getApiEpisodes();
	await getApiCharacters();
});
