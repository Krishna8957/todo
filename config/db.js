const mongoose = require("mongoose");

const connection = mongoose.createConnection("mongodb://127.0.0.1:27017/Todu").on('open',()=>{
    console.log("mongo DB connected")
}).on('error',()=>{
    console.log("MongoDB connection error");
});

module.exports = connection;