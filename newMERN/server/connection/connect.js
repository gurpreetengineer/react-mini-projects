const mongoose = require('mongoose');
const config = require('../configuration');

// Everytime something changes, this package increments the _id or some property by 1 or a random number.

/**
 * Refer Link: https://www.npmjs.com/package/mongoose-auto-increment 
 */
const autoIncrement = require ('mongoose-auto-increment');

const mongoDbConnection = async () => {
  return new Promise((resolve, reject) => {
    const url = config.MONGO_DB_CONNECTION_URL;
    mongoose.connect(url, {
      useUnifiedTopology: true,
      useNewUrlParser: true
    }, (error, result) => {
      if(error) {
        console.log('[Error connecting MongoDb] Error specified: ', error);
        return reject(error);
      } else {
        console.log('[DB Connection Successful] Running at Port: ', config.DB_PORT);
        return resolve(result);
      }
    });
  });
};
autoIncrement.initialize(mongoose);
module.exports = {
  mongoDbConnection
};

