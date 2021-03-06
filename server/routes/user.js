const User = require('../models/User')
const { verifyToken, verifyTokenAndAuth, verifyTokenAndAdmin } = require('./verifyToken')

const router = require('express').Router()

//update user 
router.put('/:id',async (req,res)=>{
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

//delete an user
router.delete("/:id", async(req,res)=>{
    try{
        await User.findByIdAndDelete(req.params.id)
        res.status(200).json("User successfully deleted")
    }
    catch(err){res.status(500).json(err)}
})

//get all users (only for admin)
router.get("/", async(req,res)=>{
    try{
        const users = await User.find()
        
        res.status(200).json(users)
    }
    catch(err){res.status(500).json(err)}
})

//get single user (only admin)
router.get("/admin/find/:id", async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
      const { password, ...others } = user._doc;
      res.status(200).json(others);
    } catch (err) {
      res.status(500).json(err);
    }
  });


module.exports = router