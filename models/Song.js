// we start off by requiring our ORM
var mongoose = require('mongoose');
// declare a schema for our model! this enforces validation,
// data types, and more
// schema accepts an argument of an object that defines Keys (names)
// and their corresponding data type
var SongSchema = new mongoose.Schema({
  Song: String, // define each object's Name must be a String
  Album: String  // define each object's Name must be a String
});
// we end by exporting a mongoose model
// when we export we need to give our model an application-wide name
// and specify what Schema to use!
module.exports = mongoose.model('Song', SongSchema);
