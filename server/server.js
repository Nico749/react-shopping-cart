const express = require ('express')
const app = express()
const mongoose = require ('mongoose')
const dotenv = require('dotenv')

const cors = require ('cors')

dotenv.config({ path: '.dotenv' })

mongoose
.connect(process.env.MONGO_URL)
.then(()=>{console.log("Db connection successfull")})
.catch((err)=>{console.log(err)})



app.listen(process.env.PORT || 5000, ()=>{
    console.log(`Server running! at port 5000`)
})