//register and login routes
const router = require('express').Router()
const CryptoJS = require('crypto-js')
const jwt = require ('jsonwebtoken')
const User = require ('../models/User')

//api/auth/register
router.post('/register', async (req, res) => {
      const newUser = new User({
        username: req.body.username,
        mail: req.body.mail,
        password: CryptoJS.AES.encrypt(req.body.password, process.env.PASS_CRYPTOJS).toString()
    })

    if(!req.body.username ||!req.body.mail||!req.body.password){ res.status(500).json('Missing value') 
    return }
     
    try {
        const savedUser = await newUser.save()
        res.status(200).json(savedUser)    }
    catch (err) { res.status(500).json(err) }
     
})


//api/auth/login
router.post('/login', async (req, res) => {
    
    try {
        const user = await User.findOne({ username: req.body.username })
        if (!user) { 
            res.status(401).json("No user existing with that username") 
            return}
        const hashedPwd = CryptoJS.AES.decrypt(user.password, process.env.PASS_CRYPTOJS);
        const pwd = hashedPwd.toString(CryptoJS.enc.Utf8)
        if (pwd !== req.body.password) {
            res.status(401).json("Wrong password")
            return
        }

        const accessToken = jwt.sign({
            id:user._id,
            isAdmin:user.isAdmin
        }, process.env.JWT_KEY,
           {expiresIn:"1h"})

        //send everything but the pwd back
        const {password, ...others} = user._doc

        res.status(200).json({...others,accessToken})
    }
    catch (err) { res.status(500).json(err) }
     
})



module.exports = router