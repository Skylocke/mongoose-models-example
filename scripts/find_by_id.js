var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var Person = require('../models/person').Person;
var Post = require('../models/person').Post;

var id = '58827443b6ceb29a18924c66';
Person.findById(id, function(err, author) {
  console.log("author:", author);
});
