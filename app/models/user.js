var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var UserSchema = new Schema({
	firstName: String,
	lastName: String,
	email: String,
	phone: String,
	fbUserId: String,
	loggedIn: Boolean
});

module.exports = mongoose.model('User', UserSchema); 