const express = require('express')
const router = express.Router();
const {Crime} = require('../models')

router.get("/", async(req, res) =>{
	const crimeList = await Crime.findAll();
	res.json(crimeList);
});

router.post('/', async(req, res) =>{
	const crime_col = req.body
	await Crime.create(crime_col);
	res.json(crime_col);
})

module.exports = router;