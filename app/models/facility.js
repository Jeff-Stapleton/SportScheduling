var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var FacilitySchema   = new Schema({
	name: String,
    phone: String,
    hours: String,
    id: Number,
    image: String
});

module.exports = mongoose.model('Facility', FacilitySchema);