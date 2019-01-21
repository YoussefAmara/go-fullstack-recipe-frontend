var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

mongoose.connect('mongodb://node_recipe:9hL9UigmrWLiYqXe@cluster0-shard-00-00-ob8yf.mongodb.net:27017,cluster0-shard-00-01-ob8yf.mongodb.net:27017,cluster0-shard-00-02-ob8yf.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true').then(() => {
      console.log('Successfully connected to MongoDB Atlas!');
      })
      .catch((error) => {
      console.log('Unable to connect to MongoDB Atlas!');
      console.error(error);
      });

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


var route = require('./routes/route');

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use('/api/recipes',route);

module.exports = app;
