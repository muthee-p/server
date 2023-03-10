const express = require('express')
const router = express.Router();
const {Trades} = require('../models')

router.get("/", async(req, res) =>{
	const tradeList = await Trades.findAll();
	res.json(tradeList);
});

router.post('/', async(req, res) =>{
	const trade_col = req.body
	await Trades.create(trade_col);
	res.json(trade_col);
})

module.exports = router;