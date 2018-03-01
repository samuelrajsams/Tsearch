
var express = require('express'),
mongoose = require('mongoose'),
app = express();
bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.listen('8000');
app.use('/v1', require('./routes'));

var mongoDB = 'mongodb://127.0.0.1/my_database';
mongoose.connect(mongoDB);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

module.exports = app;


nocteam@cosmickentglobal.com