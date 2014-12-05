var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var GameSchema   = new Schema({
	name: String,
	location: String,
	ownerId: String,
	start: String,
	end: String,
	people: Number
});

module.exports = mongoose.model('Game', GameSchema);