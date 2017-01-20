var models = require('../models/person');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

console.log("creating post");
models.Person.findOne({
  first_name: "Judith",
  last_name: "Hanson"
}, function(err, person) {
  console.log("person:", person);
  console.log("person id:", person.id);
  console.log("person _id:", person._id);
  
  models.EmbeddedPost.create({
    title: "Pale Blue Dot",
    content: "Wow, the Earth looks so small from up here",
    author: person
  }, function(err, embeddedPost) {
    console.log("Embedded post:", embeddedPost);
    console.log("Embedded author:", embeddedPost.author);
    console.log();
  });
  
  models.ReferencedPost.create({
    title: "Pale Blue Dot",
    content: "Wow, the Earth looks so small from up here",
    author: person.id
  }, function(err, referencedPost) {
    console.log("Referenced post:", referencedPost);
    console.log("Referenced author:", referencedPost.author);
    models.Person.findById(referencedPost.author, function(err, author) {
      console.log("Retrieved author from reference:", author);
    });
  });
});
