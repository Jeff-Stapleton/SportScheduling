var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var userSchema = new Schema({
	firstName: String,
	lastName: String,
	email: String,
	phone: String,
	picture: String	
});

module.exports = mongoose.model('User', UserSchema); 