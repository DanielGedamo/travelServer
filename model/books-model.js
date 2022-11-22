const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    title: {type:String,require:true},
    numberOfPages:{type:Number,require:true},
    author: {type:String,require:true},
    year: {type:Number,require:true},
},
    {
        timestamps: true
    })
module.exports = mongoose.model("book",BookSchema)