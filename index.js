const app = require("./app")
const mongoose = require("mongoose");
const db = require("./config/db");
const UserModel = require("./model/user.model")


const PORT = process.env.PORT || 5000;
app.get("/",(req,res)=>{
    res.send("hello this is the homepage")
})

app.listen(PORT, () => {
    console.log(`Server stated by PORT http://localhost:${PORT}`);
}

)