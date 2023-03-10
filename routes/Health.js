const express = require('express')
const router = express.Router();
const {Health} = require('../models')

router.get("/", async(req, res) =>{
	const healthList = await Health.findAll();
	res.json(healthList);
});

router.post('/', async(req, res) =>{
	const health_col = req.body
	await Health.create(health_col);
	res.json(health_col);
})

module.exports = router;