const express = require('express');
const server = express.Router();
const { getDbCharacters, newCharacter, AllOrigins } = require('./Functions/Character');
const { getDbEpisodes } = require('./Functions/Episodes');

server.use(express.json());

server.get('/characters', getDbCharacters);

server.get('/episodes', getDbEpisodes);
server.post('/newcharacter', newCharacter);
server.get('/origin', AllOrigins);

server.get('/getDbCharacters', getDbCharacters);

module.exports = server;
