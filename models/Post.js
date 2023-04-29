const mongoose=require('mongoose')

const userDetailsSchema=new mongoose.Schema(
    {
        ArtistName:String,
        Podcast:{
            type:String,
            required:true
        },
    },
    {
        collection:"Post" 
    }
)
mongoose.model("Post",userDetailsSchema)