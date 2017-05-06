var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var forumSchema = new Schema({
  title: {type: String, required: true},
  message: String
});

var Forum = mongoose.model('Forum', forumSchema);
