const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
// This will be our application entry. We'll setup our server here.
const http = require('http');
require('dotenv').config()
const cors = require('cors');
const upload = require('./config/multer-file')
// Set up the express app
const app = express();
// Log requests to the console.
app.use(logger('dev'));
// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}))
app.use(upload.array())

// Models 
var models = require('./models');
models.sequelize.sync().then(() => {
  console.log("nice batabase look fine")
}).catch((err) => {
  console.log(err, "Something went wrong ")
})

// routes
require('./router')(app);
app.get('*', (req, res) => res.status(200).send({
  message: "Welcome of the  beginning"
}))


// Setup a default catch-all route that sends back a welcome message in JSON format.
app.get('*', (req, res) => res.status(200).send({
  message: 'Welcome to the beginning of nothingness.',
}));
const port = parseInt(process.env.PORT, 10) || 8000;
app.set('port', port);
const server = http.createServer(app);
server.listen(port);
module.exports = app;