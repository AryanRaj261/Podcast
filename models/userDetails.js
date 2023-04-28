const mongoose=require('mongoose')

const userDetailsSchema=new mongoose.Schema(
    {
        Firstname:String,
        Lastname:String,
        email:{type:String,unique:true},
        password:String,
    },
    {
        collection:"UserInfo" 
    }
)
mongoose.model("UserInfo",userDetailsSchema)