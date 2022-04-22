const expressApp = require('express')();
// const expressApp = express();
const mongoose = require('mongoose');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const config = require('./configuration');
const connection = require('./connection/connect');

const routes = require('./src/routes');
const serverHttp = require('http').createServer(expressApp);

expressApp.use(bodyParser.json());
expressApp.use(bodyParser.urlencoded({ extended: true }));
expressApp.use(cors());
expressApp.use(logger('dev'));

expressApp.use('/api', routes);

serverHttp.listen(config.SERVER_PORT, async () => {
    console.log(`Environment: ${config.NODE_ENV}`);
    console.log(`[Server Running] on Port: ${config.SERVER_PORT}`);
    await connection.mongoDbConnection();
});




