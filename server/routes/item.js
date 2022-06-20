const Item = require('../models/Item')

const router = require('express').Router()

//update item 
router.put('/:id',async (req,res)=>{
   try{
    const updatedItem = await Item.findByIdAndUpdate(req.params.id,{
        //take everything inside req.body and set it again
        $set:req.body
    },{new:true})
    res.status(200).json(updatedItem)
   }
   catch(err){res.status(500).json(err)}
})

//delete an item
router.delete("/:id", async(req,res)=>{
    try{
        await Item.findByIdAndDelete(req.params.id)
        res.status(200).json("Item successfully deleted")
    }
    catch(err){res.status(500).json(err)}
})

//get all items 
router.get("/", async(req,res)=>{
    try{
        const employees = await Item.find()
        
        res.status(200).json(employees)
    }
    catch(err){res.status(500).json(err)}
})

//get single item 
router.get("/:id", async (req, res) => {
    try {
      const item = await Item.findById(req.params.id);
      res.status(200).json(item);
    } catch (err) {
      res.status(500).json(err);
    }
  });
//create a new item
  router.post('/', async (req, res) => {
    const newItem = new Item({
      title: req.body.title,
      cost: req.body.cost,
      quantity: req.body.quantity,
      inStock: req.body.inStock
      
  })

  if(!req.body.title ||!req.body.cost||!req.body.quantity||!req.body.inStock){ 
    res.status(500).json('Missing value') 
  return 
}
   
  try {
      const savedItem = await newItem.save()
      res.status(200).json(savedItem)    }
  catch (err) { res.status(500).json(err) }
   
})


module.exports = router