var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var FacilitySchema   = new Schema({
	name: String,
	hours: String,
    phone: String,
    id: Number,
    image: String
});

module.exports = mongoose.model('Facility', FacilitySchema);