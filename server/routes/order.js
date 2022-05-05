const Order = require('../models/Order')
const { verifyToken, verifyTokenAndAuth, verifyTokenAndAdmin } = require('./verifyToken')

const router = require('express').Router()

//create a new cart (everyone can create that)
router.post("/", verifyToken, async (req, res) => {
    const order = new Order(req.body); 
    try {
      const newOrder = await order.save();
      res.status(200).json(newOrder);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
//update existing order (only admin can)
router.put('/:id',verifyTokenAndAdmin,async (req,res)=>{
   try{
    const updatedOrder = await Order.findByIdAndUpdate(req.params.id,{
        $set:req.body
    },{new:true})
    res.status(200).json(updatedOrder)
   }
   catch(err){res.status(500).json(err)}
})

//delete order
router.delete("/:id", verifyTokenAndAdmin, async(req,res)=>{
    try{
        await Order.findByIdAndDelete(req.params.id)
        res.status(200).json("Order successfully deleted")
    }
    catch(err){res.status(500).json(err)}
})

//get all orders (only admin)
router.get("/", verifyTokenAndAdmin, async (req, res) => {
    try {
        const orders = await Order.find()
        res.status(200).json(orders)
    }
    catch (err) { res.status(500).json(err) }
})

//get user orders
router.get("/find/:userId", verifyTokenAndAuth, async (req, res) => {
    try {
        const orders = await Order.findOne({userId: req.params.userId});
        res.status(200).json(orders);
    } catch (err) {
        res.status(500).json(err);
    }
  });


module.exports = router