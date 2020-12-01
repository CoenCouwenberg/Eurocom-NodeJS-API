const mongoose = require('mongoose');

const zittenSchema = mongoose.Schema({
	aantal: {
		type: Number,
		required: true
	},
	tijd: {
		type: String
	}
});

module.exports = mongoose.model('Zitten', zittenSchema, "Zitten");