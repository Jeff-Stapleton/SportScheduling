var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var FacilitySchema   = new Schema({
	name: String,
    address: String,
    phone: String
});

module.exports = mongoose.model('Facility', FacilitySchema);