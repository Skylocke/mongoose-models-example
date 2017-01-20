var express = require('express');
var bodyParser = require('body-parser');
// var models = require('./models/person');
// models.Person
// models.Post
var Person = require('./models/person').Person;
var Post = require('./models/person').Post;

var app = express();

app.use(bodyParser.urlencoded({extended: false}));

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

app.get('/', function(req, res) {
  var people = Person.find({
    
  }, function(err, people) {
    res.send(people);
  });
});

app.get('/titles', function(req, res) {
  var people = Person.find({
  }, function(err, people) {
    people = people.map(function(person) {
      return person.title();
    })
    res.send(people);
  });
});

app.listen(3000);
