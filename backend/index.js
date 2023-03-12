const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');


const app = express();
app.use(express.json());
app.use(cors());
mongoose
  .connect(
    "mongodb+srv://murali:zna6k2YaIBQ3IglQ@cluster0.ev7pbcx.mongodb.net/?retryWrites=true"
  )
  .then(() => {
    console.log("database connected");
  })
  .catch((err) => console.log("something is wrong with db",err));

  
app.use('/api',require('./routes/api'))
// app.post('/register/recruiter',function(req,res){
  app.get("/", (req, res) => {
    res.send("Hello World");
  });
  
// })

app.listen(3001,function(){
    console.log("listening to port");
})