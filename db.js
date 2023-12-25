const mongoose = require("mongoose");

var mongoDBURL = 'mongodb+srv://Pranshu:2p2p2002P@cluster0.0occvkb.mongodb.net/room'

mongoose.connect(mongoDBURL , {useUnifiedTopology:true , useNewUrlParser:true})

var dbconnect = mongoose.connection

dbconnect.on('error' , ()=>{
    console.log(`Mongo DB Connection Failed`);
})

dbconnect.on('connected' , ()=>{
    console.log(`Mongo DB Connection Successfull`);
})

module.exports = mongoose