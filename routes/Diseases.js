const express = require('express')
const router = express.Router();
const {Diseases} = require('../models')

router.get("/", async(req, res) =>{
	const diseasesList = await Diseases.findAll();
	res.json(diseasesList);
});

router.post('/', async(req, res) =>{
	const disease = req.body
	await Diseases.create(disease);
	res.json(disease);
})

module.exports = router;