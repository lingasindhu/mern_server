const express=require('express')
const router=express.Router()
router.get('/login',(req,res,next)=>{
    res.send(`<h1>Login here</h1>`)
})
module.exports=router;
