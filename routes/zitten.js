const express = require('express');
const router = express.Router();
const Zitten = require('../models/Zitten');

// Gets back all the ZITTENNNNN
router.get('/', async (req, res) => {
	try {
		const zitten = await Zitten.find();
		res.json(zitten);
		// console.log(stappentellers);
	} catch(err) {
		res.json({message:err});
	}
	// res.send('We are on posts');
});

// Submits a postt
router.post('/', async (req, res) => {
	// console.log(req.body);
	const zitten = new Zitten({
		aantal: req.body.aantal,
		tijd: req.body.tijd
	});

	try {
		const savedStappen = await zitten.save();
		res.json(savedStappen);
	} catch (err) {
		res.json({ message: err});
	}
});

module.exports = router;