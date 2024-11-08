import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    username:{
        type:String,
        unique: true,
        
    },
    email:{
        type:String,
        unique:true,

    },
    password:{
        type:String,
        require:true,
    },
    list:[{
        type:mongoose.Types.ObjectId,
        ref:"List",
    }]
});
export const User = mongoose.model("User" , userSchema);