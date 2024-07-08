const mongoose = require('mongoose');
const authorSchema = mongoose.Schema({
    _id:{
        type:String,
        required:true,
    },
    name:{
        type:String,
        required:true,
    },age:{
        type:String,
        required:true,
    },totalbooks:{
        type:String,
        required:true,
    },description:{
        type:String,
        required:true,
    }
}) //convert this into A MONGOOSE schema 
module.exports= mongoose.model('Author',authorSchema)