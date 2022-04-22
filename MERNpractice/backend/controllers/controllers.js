'use strict';

let mongoose = require('mongoose');

let UserObject = mongoose.model('Object');

exports.createUserProfile = function (req, res) {
  let newUserProfileObject = new UserObject(req.body);
  console.log('createUserProfile', newUserProfileObject);
}

