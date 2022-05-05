const router = require('express').Router()

//api/user/usertest
router.get('/usertest',(req,res)=>{
    res.send('test')
})
router.post('/usertest',(req,res)=>{
    const username = req.body.username
    res.send(username)
})

module.exports = router