require('../models/userDetails')
const express=require("express")
const app=express()
const mongoose=require("mongoose") 

app.use(express.json())
app.listen(5000,()=>{
    console.log("Server running on port: 5000")
})
const mongoUrl="mongodb+srv://fliprTeam:l9DJa1K7oUQARz4k@cluster0.gvyiocm.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(mongoUrl,{
    useNewUrlParser:true
}).then(()=>{console.log("Connected");})
.catch(e=>console.log(e))

const User=mongoose.model("UserInfo")

app.post("/register",async(req,res)=>{
    const {name,email,password}=req.body;
    try {
        await User.create(
            {
                name,
                email,
                password
            }
        );
        res.send({"Status":"Data received"})
    } catch (error) {
        res.send({"Status":"Error"})
    }
});
