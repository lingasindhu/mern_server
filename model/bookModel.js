const { Int32 } = require('mongodb');
const mongoose = require('mongoose');
const bookSchema = mongoose.Schema({
    _id:{
        type:String,
        required:true,
    },
    name:{
        type:String,
        required:true,
    },publisher:{
        type:String,
        required:true,
    },description:{
        type:String,
        required:true,
    },author_id:{
        type:String,
        required:true,
    }
}) //convert this into A MONGOOSE schema 
module.exports= mongoose.model('Book',bookSchema)