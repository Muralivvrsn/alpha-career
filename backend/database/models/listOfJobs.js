const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Job = new Schema({
    company:String,
    position:String,
    skills:[String],
    salary:[{
        min:Number,
        max:Number
    }],
    about:String,
    numberOfApplicants:{
        type:Number,
        default:0
    },

});

const Jobs = mongoose.model('jobs',Job);
module.exports = Jobs