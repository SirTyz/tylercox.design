var gzippo = require('gzippo');
var express = require('express');
var morgan = require('morgan');
var mongoose = require('mongoose');


var app = express();

app.use(morgan('dev'));
app.use(gzippo.staticGzip("" + __dirname + "/dist"));
app.listen(process.env.PORT || 5000);

var Schema = mongoose.Schema;

// create a schema
var userSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  admin: Boolean
});

// the schema is useless so far
// we need to create a model using it
var User = mongoose.model('User', userSchema);

// make this available to our users in our Node applications
module.exports = User;
