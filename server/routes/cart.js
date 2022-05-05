const Cart = require('../models/Cart')
const { verifyToken, verifyTokenAndAuth, verifyTokenAndAdmin } = require('./verifyToken')

const router = require('express').Router()

//create a new cart (everyone can create that)
router.post("/", verifyToken, async (req, res) => {
    const cart = new Cart(req.body); 
    try {
      const newCart = await cart.save();
      res.status(200).json(newCart);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
//update existing cart
router.put('/:id',verifyTokenAndAuth,async (req,res)=>{
   try{
    const updatedCart = await Cart.findByIdAndUpdate(req.params.id,{
        $set:req.body
    },{new:true})
    res.status(200).json(updatedCart)
   }
   catch(err){res.status(500).json(err)}
})

//delete cart
router.delete("/:id", verifyTokenAndAuth, async(req,res)=>{
    try{
        await Cart.findByIdAndDelete(req.params.id)
        res.status(200).json("Cart successfully deleted")
    }
    catch(err){res.status(500).json(err)}
})

//get all carts (only admin)
router.get("/", verifyTokenAndAdmin, async (req, res) => {
    try {
        const carts = await Cart.find()
        res.status(200).json(carts)
    }
    catch (err) { res.status(500).json(err) }
})

//get user cart
router.get("/find/:userId", verifyTokenAndAuth, async (req, res) => {
    try {
        const cart = await Cart.findOne({userId: req.params.userId});
        res.status(200).json(cart);
    } catch (err) {
        res.status(500).json(err);
    }
  });


module.exports = router