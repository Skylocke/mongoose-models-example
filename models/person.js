var mongoose = require('mongoose');

var personSchema = new mongoose.Schema({
  name: 'Mixed',
  first_name: String,
  last_name: String,
  email: String,
  gender: String,
  ip_address: String,
}, {collection: 'people'});

personSchema.methods.title = function() {
  console.log(this);
  if (this.name !== undefined) {
    return this.name.first + ' ' + this.name.last;
  } else if (this.email.indexOf('nasa') >= 0) {
    return 'Astronaut ' + this.first_name + ' ' + this.last_name;
  } else if (this.gender === 'Male') {
    return 'Mr. ' + this.last_name;
  } else if (this.gender === 'Female') {
    return 'Mrs. ' + this.last_name;
  }
}

// This schema embeds the entire Person schema into each Post
// document in the database. This means the author information
// is duplicated in many places throughout the database, but
// it will be easier to retrieve the author information with
// each access.
var embeddedPostSchema = new mongoose.Schema({
  title: String,
  content: String,
  author: personSchema
}, {collection: 'embeddedposts'});

// This schema will only store the ID of the person
// it references. It's better because the author information
// stays in only one place, but it requires an extra query to
// obtain that author information.
var referencedPostSchema = new mongoose.Schema({
  title: String,
  content: String,
  author: 'ObjectId'
}, {collection: 'referenceposts'});

var Person = mongoose.model('Person', personSchema);
var EmbeddedPost = mongoose.model('EmbeddedPost', embeddedPostSchema);
var ReferencedPost = mongoose.model('ReferencedPost', referencedPostSchema);


module.exports = {
  Person: Person,
  EmbeddedPost: EmbeddedPost,
  ReferencedPost: ReferencedPost
};
