const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const routes = require('./Routes');
const e = require('express');

require('./db.js');

const server = express();

server.name = 'API';

server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
server.use(bodyParser.json({ limit: '50mb' }));
server.use(cookieParser());
server.use(morgan('dev'));
server.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', process.env.CORS_URL || 'http://localhost:3000');
	res.header('Access-Control-Allow-Credentials', 'true');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
	next();
});

server.use('/', routes);

// Error catching endware.
server.use((err, req, res, next) => {
	const status = err.status || 500;
	const message = err.message || err;
	console.log('💥💥💥 / file: app.js / line 32 / server.use / message ->', message);

	res.status(status).send(message);
});

module.exports = server;
