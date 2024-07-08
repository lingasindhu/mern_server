const express= require('express')
const router = express.Router()
const author = require('../model/authorModel')
router.post('/',(req,res)=>{
    try{
    const {_id,name,age,totalbooks,description}=req.body;
    const userQuery = new author({_id,name,age,totalbooks,description});
   // we can save it to the database
    userQuery.save()
    res.status(201).send({message:"User Created"});
    }catch(err){
        res.status(500).send({message:err.message})
    }
})
router.get('/',async(req,res)=>{
    try{
        const data=await User.find();
        res.status(200).send(data);
    }catch(err){
        res.status(500).send({message:err.message})
    }
})

module.exports=router;