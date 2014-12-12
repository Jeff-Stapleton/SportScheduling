var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var GameSchema   = new Schema({
	name: String,
	location: String,
	fbUserId: String,
	start: String,
	end: String,
	people: Number,
    courtId: String,
    open: Boolean,
    image: String
});

module.exports = mongoose.model('Game', GameSchema);