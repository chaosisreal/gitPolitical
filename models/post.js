var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var forumSchema = new Schema({
  title: {type: String, required: true},
  message: String
});

mongoose.model('postData', forumSchema);
