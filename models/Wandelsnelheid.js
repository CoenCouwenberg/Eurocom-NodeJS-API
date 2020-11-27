const mongoose = require('mongoose');

const WandelSchema = mongoose.Schema({
	snelheid: {
		type: Number,
		required: true
	},
	tijd: {
		type: String
	}
});

module.exports = mongoose.model('Wandelsnelheid', WandelSchema, "Wandelsnelheid");