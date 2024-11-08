import mongoose from "mongoose";


const listSchema = new mongoose.Schema({
    title:{
        type:String,
        required: true,
    },
    body:{
        type:String,
        require: true,
    },
    user:[{
        type:mongoose.Types.ObjectId,
        ref:"User",
    }]
},
{timestamps:true});
export  const List = mongoose.model("List" , listSchema);