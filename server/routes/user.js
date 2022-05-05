const User = require('../models/User')
const { verifyToken, verifyTokenAndAuth } = require('./verifyToken')

const router = require('express').Router()

//update user 
router.put('/:id',verifyTokenAndAuth,async (req,res)=>{
  //first check the password we pass
    if(req.body.password){
    req.body.password =  CryptoJS.AES.encrypt(req.body.password, process.env.PASS_CRYPTOJS).toString()
   }
   try{
    const updatedUser = await User.findByIdAndUpdate(req.params.id,{
        //take everything inside req.body and set it again
        $set:req.body
    },{new:true})
    res.status(200).json(updatedUser)
   }
   catch(err){res.status(500).json(err)}
})


module.exports = router