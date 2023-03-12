const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const projectSchema = new Schema({
    name:{
        type:String,
    },
    description:{
        type:String
    },
});
const educationSchema = new Schema({
    collegeName:String,
    course:String,
    startDate:Date,
    endDate:Date
})

const newCandidate = new Schema({
    firstName:{
        type: String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true,
    },
    education:[educationSchema],
    jobsApplied:[String],
    skills:[String],
    about:String,
    projects:[projectSchema]
});
const Candidate = mongoose.model('candidates',newCandidate);

module.exports = Candidate;