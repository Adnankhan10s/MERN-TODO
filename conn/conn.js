// const mongoose = require("mongoose")
// const conn = async(req , res)=>{
//  await mongoose.connect("mongodb+srv://adnankhan10s:adnan74900@cluster0.ngpn2.mongodb.net/").then(()=>{
//     console.log("Connected")
//  })
// };
// conn();
// import mongoose from "mongoose";

// const connetDB = async () =>{
//     try {
//         const connection = await mongoose.connect(process.env.MONGODB_URI);
//         console.log(`/n MongoDB connected || connection  host : ${connection}`)


//     } catch (error) {
//         console.log("MONGO-DB connection error:" , error)
//         process.exit(1)
//     }
// }
// export default connetDB


// import mongoose from "mongoose";

// const connectDB = async () => {
//     try {
//         const connection = await mongoose.connect(process.env.MONGODB_URI);
//         console.log(`MongoDB connected || Host on : ${connection}`);
        
//     } catch (error) {
//         console.log("MongoDB Connection Error" , error);
//         process.exit(1);
//     }
    
// }
// export default connectDB;
import mongoose from "mongoose";

const connectDB = async()=>{
    try {
        const connection = await mongoose.connect(process.env.MONGODB_URI);
        console.log(`MongoDB Connected || Host on ${connection}`)
    } catch (error) {
        console.log("MongoDB Connection Error", error);
        process.exit(1);
    }
}
export default connectDB;