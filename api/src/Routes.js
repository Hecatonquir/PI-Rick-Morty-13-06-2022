const express = require('express');
const server = express.Router();
const { ALLCharacters2, getEpisodes2, newCharacter, AllOrigins } = require('./functions');

server.use(express.json());

server.get('/characters', ALLCharacters2);
server.get('/episodes', getEpisodes2);
server.post('/newcharacter', newCharacter);
server.get('/origin', AllOrigins);

module.exports = server;
