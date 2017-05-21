/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser')
var mongoConnection = require('./libs/MongoDBConnector');
var movieDetails = require('./app/models/MovieDetails');
var movieComments = require('./app/models/MovieComments');
var movieRating = require('./app/models/MovieRating');
var app = express();
global.app = app;

app.use(bodyParser.json());

app.use(bodyParser.urlencoded());

app.use('/public', express.static(path.join(__dirname, 'public')));

app.use(mongoConnection.connect);

app.get('/home', function(req, res) {

  res.sendFile(__dirname + '/public/html/home.html');
});

app.post('/getMovieDetailsWithId', function(req, res) {
  movieDetails.getMovieDetailsWithId(req, res, app.locals.movieListTable)
});

app.post('/getMovieList', function(req, res) {
  movieDetails.getMovieList(req, res, app.locals.movieListTable)
});

app.post('/getMovieComments', function(req, res) {
  movieComments.getMovieComments(req, res, app.locals.movieCommentsTable)
});

app.post('/getMovieRating', function(req, res) {
  movieRating.getMovieRating(req, res, app.locals.movieRatingTable)
});
app.listen(3000);