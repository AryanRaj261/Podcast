require('../../../models/userDetails')
const express=require("express")
const app=express()
const mongoose=require("mongoose") 
const cors=require('cors')
const bcrypt=require("bcryptjs")
const jwt=require('jsonwebtoken')
const JWT_SECRET="ksbfkus3@#$%$skldgndsl54345"
app.use(express.json())
app.use(cors())
app.listen(5000,()=>{
    console.log("Server running on port: 5000")
})
const mongoUrl="mongodb+srv://fliprTeam:l9DJa1K7oUQARz4k@cluster0.gvyiocm.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(mongoUrl,{
    useNewUrlParser:true
}).then(()=>{console.log("Connected");})
.catch(e=>console.log(e))

const User=mongoose.model("UserInfo")

// Singup route
app.post("/signup",async(req,res)=>{
    const {Firstname,Lastname,email,password}=req.body;
    const encyptPassword=await bcrypt.hash(password,10)
    try {
        const oldUser=await User.findOne({email})
        if(oldUser)return res.send({error:"User already exist"})
        await User.create(
            {
                Firstname,
                Lastname,
                email,
                password:encyptPassword,
            }
        );
        res.send({"Status":"Data received"})
    } catch (error) {
        return res.send({"Status":"Error"})
    }
});

// Signin route

app.post("/login",async(req,res)=>{
    const {email,password}=req.body;
    const userExist=await User.findOne({email});
    if(!userExist)return res.json({error:"Ivalid username or password"})
    if(await bcrypt.compare(password,userExist.password)){
        const token=jwt.sign({},JWT_SECRET);
        if(res.status(201)){
            return res.json({status:"ok",data:token})
        }else {
            return res.json({error:"Error"})
        }
    }
    res.json({status:"Invalid credentials"})
})