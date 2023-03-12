const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const newRecruiter = new Schema({
    name:{
        type: String,
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
    jobsPosted:[String],
});

const Recruiter = mongoose.model('recruiters',newRecruiter);

module.exports = Recruiter;