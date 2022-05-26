const Employee = require('../models/Employee')
const { verifyToken, verifyTokenAndAuth, verifyTokenAndAdmin } = require('./verifyToken')

const router = require('express').Router()

//update employee 
router.put('/employee/:id',async (req,res)=>{
   try{
    const updatedEmp = await Employee.findByIdAndUpdate(req.params.id,{
        //take everything inside req.body and set it again
        $set:req.body
    },{new:true})
    res.status(200).json(updatedEmp)
   }
   catch(err){res.status(500).json(err)}
})

//delete an employee
router.delete("/employee/:id", async(req,res)=>{
    try{
        await Employee.findByIdAndDelete(req.params.id)
        res.status(200).json("Employee successfully deleted")
    }
    catch(err){res.status(500).json(err)}
})

//get all employees 
router.get("/employee", async(req,res)=>{
    try{
        const employees = await Employee.find()
        
        res.status(200).json(employees)
    }
    catch(err){res.status(500).json(err)}
})

//get single employee 
router.get("/employee/:id", async (req, res) => {
    try {
      const employee = await Employee.findById(req.params.id);
      res.status(200).json(employee);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.post('/employee', async (req, res) => {
    const newEmp = new Employee({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      mail: req.body.mail, 
      salary: req.body.salary,
      phone: req.body.phone,
      role: req.body.role
      
  })

  if(!req.body.firstName ||!req.body.mail||!req.body.salary||!req.body.phone||!req.body.lastName){ res.status(500).json('Missing value') 
  return }
   
  try {
      const savedUser = await newEmp.save()
      res.status(200).json(savedUser)    }
  catch (err) { res.status(500).json(err) }
   
})


module.exports = router