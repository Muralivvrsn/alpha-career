const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const Jobs = require('../database/models/listOfJobs');
const router = express.Router();
const Candidate = require('../database/models/candidate');

router.post('/register/candidate',function(req,res){
    const {firstName,lastName, email,password} = req.body;
    let oldUser = Candidate.find({email})
    console.log(oldUser)
    console.log(email)
    if(!oldUser){
        res.send("User already exists");
    }
    const user = new Candidate({
        firstName:firstName,
        lastName:lastName,
        email:email,
        password:password
    })
    user.save();
    res.json(user);
});
router.post('/jobs',function(req,res){
    const Job = new Jobs({
        company:req.body.company,
        position:req.body.position,
        skills:req.body.skills,
        salary:req.body.salary,
        about: req.body.about
    })
    Job.save();
    res.send(Job)
})
router.get("/candidate",function(req,res){
    const {email} = req.body;
    const user = Candidate.find({email}).then((data)=>{
        console.log(data);
        res.json(data);
    })
})
router.get('/jobs',function(req,res){
    Jobs.find().then((data)=>{
        res.send(data)
    })
})

router.get('/login/candidate',function(req,res){
    const {email, password} = req.body;
    const user = Candidate.find({email,password}).then((data)=>{
        console.log(data);
        res.send(data);
    })
    
})

router.get('/candidates',function(req,res){
   Candidate.find().then((data)=>{
    res.json(data);
   })
})
module.exports = router;