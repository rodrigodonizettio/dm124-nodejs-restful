const express = require('express');
const morgan = require('morgan');

const app = express();
app.use(morgan('dev')); //Specific Logger for HTTP req, res to/from Server
app.use(express.json()); //Do JSON parse from Body inside HTTP req, res

app.use('/api/tasks', require('./api/routes/tasks'));
app.use(require('./api/middleware/not-found'));

module.exports = app;