const express = require ('express')
const app = express()
const mongoose = require ('mongoose')
const dotenv = require('dotenv')
const userRoute = require ('./routes/user')
const authRoute = require ('./routes/auth')
const productRoute = require ('./routes/product')
const orderRoute = require ('./routes/order')
const cartRoute = require ('./routes/cart')
const employeeRoute = require ('./routes/employee')
const itemRoute = require ('./routes/item')

const cors = require ('cors')

dotenv.config({ path: '.dotenv' })

mongoose
.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/nicoshop',)
.then(()=>{console.log("Db connection successfull")})
.catch((err)=>{console.log(err)})
//prevent errors with CORS
app.use(cors({
    origin: "http://localhost:3000",
    credentials: true,            
    optionSuccessStatus: 200,
  }))
app.use(express.json())
app.use('/api/users',userRoute)
app.use('/api/auth', authRoute)
app.use('/api/products', productRoute)
app.use('/api/orders', orderRoute)
app.use('/api/carts', cartRoute)
app.use('/api/admin', employeeRoute)
app.use('/api/item', itemRoute)


app.listen(process.env.PORT || 5000, ()=>{
    console.log(`Server running `)
})