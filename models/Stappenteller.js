const mongoose = require('mongoose');

const StappentellerSchema = mongoose.Schema({
	aantal: {
		type: Number,
		required: true
	},
	date: {
		date: Date
	}
});

module.exports = mongoose.model('StappenTellers', StappentellerSchema, "Stappen");