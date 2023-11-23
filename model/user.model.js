const mongoose = require("mongoose");
const db = require("../config/db");
const bcrypt = require("bcrypt")

const { Schema} = mongoose;

const userSchema = new mongoose.Schema ({
    email :{
       type : String,
       lowercase : true,
       required : true,
       unique : true
    },
    password:{
        type : String,
        required : true,
    }
});

userSchema.pre("save",async function(){
    try {
        var user =  this;
        const salt = await (bcrypt.genSalt(10));
        const hasspass = await bcrypt.hash(user.password,salt);

           user.password = hasspass;

    } catch (error) {
        throw error;
    }
})

 const UserModel = db.model("toduUsers",userSchema);

 module.exports = UserModel;