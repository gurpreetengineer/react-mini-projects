let express = require('express');
let application = express();
let port = 4000;
let mongoose = require('mongoose');
let bodyParser = require('body-parser');
let UserObject = require('./models/models'); //this will call the model and, as per the file, will export into module.exports 

// mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/frontend', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
}).then(() => {
  console.log('DB Connection established')
})

application.use(bodyParser.urlencoded({ extended: true }));
application.use(bodyParser.json());

let routes = require('./routes/routes');

routes(application)
application.listen(port);

