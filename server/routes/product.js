const Product = require('../models/Product')
const { verifyToken, verifyTokenAndAuth, verifyTokenAndAdmin } = require('./verifyToken')

const router = require('express').Router()

//create a new product (admin)
router.post("/", verifyTokenAndAdmin, async (req, res) => {
    const product = new Product(req.body);
  
    try {
      const newProduct = await product.save();
      res.status(200).json(newProduct);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
//update existing product 
router.put('/:id',verifyTokenAndAuth,async (req,res)=>{
   try{
    const updatedProduct = await Product.findByIdAndUpdate(req.params.id,{
        $set:req.body
    },{new:true})
    res.status(200).json(updatedProduct)
   }
   catch(err){res.status(500).json(err)}
})

//delete a product
router.delete("/:id", async(req,res)=>{
    try{
        await Product.findByIdAndDelete(req.params.id)
        res.status(200).json("Product successfully deleted")
    }
    catch(err){res.status(500).json(err)}
})

//get all products (everybody can see them)
router.get("/", async(req,res)=>{
    //create a query for search by category
    const queryCat = req.query.category
    try {
        let products
        if (queryCat){
            //check if the product's categories are inside the query we pass
            products = await Product.find({categories:{
                $in:[queryCat]
            }})
        }
        else {
            products = await Product.find()
        }
   
        res.status(200).json(products)
    }
    catch(err){res.status(500).json(err)}
})

//get single product 
router.get("/find/:id", async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        res.status(200).json(product);
    } catch (err) {
        res.status(500).json(err);
    }
  });

  //get admin
  router.get("/admin/find/:id", async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        res.status(200).json(product);
    } catch (err) {
        res.status(500).json(err);
    }
  });
  

module.exports = router