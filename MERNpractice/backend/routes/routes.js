'use strict';

module.exports = function(app) {
  let user = require('../controllers/controllers');

  app.route('/UserObjectAnyway').post(user.createUserProfile, (req, res) => {
    console.log("Connected to React");
    res.redirect("/");
   } );


  app.post("/post", (req, res) => {
    console.log("Connected to React");
    res.redirect("/");
  });
}