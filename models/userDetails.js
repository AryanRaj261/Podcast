const mongoose=require('mongoose')

const userDetailsSchema=new mongoose.Schema(
    {
        Firstname:String,
        Lastname:String,
        email:String,
        password:String,
    },
    {
        collection:"UserInfo"
    }
)
mongoose.model("UserInfo",userDetailsSchema)