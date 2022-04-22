'use strict';

module.exports = function(app) {
    var users = require('../controllers/controllers');

    app.route('/Users')
      .post(users.create_a_Users)
      .get(users.list_all_Users)

      app.route('/Users/login')
      .post(users.login)
}

    