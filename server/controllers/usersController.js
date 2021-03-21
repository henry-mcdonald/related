const router = require('express').Router()
const User = require('../models/User.js')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')


let topicsOfInterest = [];
let disabilityTags = [];

router.post('/register', async (req, res) =>{
    try {

        const findUser = await User.findOne({
            email: req.body.email
        })

        if(findUser) return res.json('Email Already exists')
        
        const findUserName = await User.findOne({
            username: req.body.username,
        })

        if(findUserName) return res.json('Choose a different username')


        const password = req.body.password
        const saltRounds = 12
        const hashedPassword = await bcrypt.hash(password, saltRounds)
        

        const newUser = new User({
            email: req.body.email,
            password: hashedPassword,
            username: req.body.username,
            zip: req.body.zip,
            county: req.body.county
        })
        await newUser.save()

        const payload = {
            email: newUser.email,
            username: newUser.username,
            zip: newUser.zip,
            county: newUser.county,
            id: newUser.id,
        }

        const token = jwt.sign(payload, process.env.JWT_SECRET, {expiresIn: 60 * 60 })
        res.json({token})


    } catch (error) {
        console.log(error)
    }
})


module.exports = router