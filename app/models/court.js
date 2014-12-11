var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var CourtSchema   = new Schema({
	name: String,
    facId: String,
    image: String
});

module.exports = mongoose.model('Court', CourtSchema);