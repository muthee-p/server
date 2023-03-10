const express = require('express')
const router = express.Router();
const {Citizens} = require('../models')
const bcrypt = require("bcrypt")



router.post('/', async(req, res) =>{
	const 
	{first_name, last_name, date_of_birth, gender, address, email, password} = req.body
	bcrypt.hash(password, 10).then((hash) =>{
		Citizens.create({
			first_name:first_name,
			last_name: last_name,
			date_of_birth: date_of_birth,
			gender: gender,
			address: address,
			email:email,
			password:hash,
		})
		res.json("success");
	})
	
})

router.post("/login", async (req, res)=>{
	const{first_name, password} =req.body;

	const citizen= await Citizens.findOne({ where: {first_name: first_name} });

	if(!citizen) res.json({ error: 'user not found'});
	bcrypt.compare(password, citizen.password).then((match) => {
		if(!match) res.json({ error: "wrong password"});
	})
})

module.exports = router;