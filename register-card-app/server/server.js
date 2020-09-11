import route from './src/route';
import config from './config.json';
import express from 'express';
import path from 'path';
import ConfigFactory from './configFactory';

const app = express();

app.use(express.static(path.join(__dirname, 'build')));

ConfigFactory.load(process.env.ENVIRONMENT);

console.log(`Starting server with ENV: ${ConfigFactory.environment()}`);

route(app, config);

app.listen(process.env.PORT || 8080);