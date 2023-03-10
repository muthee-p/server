const express = require('express')
const router = express.Router();
const {Transport} = require('../models')

router.get("/", async(req, res) =>{
	const transportList = await Transport.findAll();
	res.json(transportList);
});

router.post('/', async(req, res) =>{
	const transport_col = req.body
	await Transport.create(transport_col);
	res.json(transport_col);
})

module.exports = router;