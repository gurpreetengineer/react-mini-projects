'use strict';

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let ObjectSchema = new Schema({
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  email: {
    type: String
  },
  password: {
    type: String
  }
})

module.exports = mongoose.model('Object', ObjectSchema);
