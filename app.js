import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
// import connetDB from "./conn/conn.js";
import connectDB from "./conn/conn.js";
import auth from "./routes/auth.js"
import list from "./routes/list.js"
dotenv.config();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
// const port = process.env.PORT

// connetDB()
// ;(async()=>{
//     try {
//         await mongoose.connect(process.env.MONGODB_URI);
//         console.log("Connected Db")
//         app.on("errorr", (error)=>{
//             console.log("Errror", error);
//             throw error;
//         })
//         app.listen(1000, ()=>{
//             console.log("Server started");
//         });

//     } catch (error) {
//         console.error("ERROR" , error)
//         throw error
//     }
// }) ()


// app.listen(port || 3000 , ()=>{
//     console.log("Server Started on",port)
// })


// app.get("/",(req , res)=>{
//     res.send("Hello")
// });
app.use(express.json());
app.use(cors());



const port = process.env.PORT
connectDB();
app.use(express.static(path.join(__dirname,"frontend","dist")));
app.get("/",(req , res)=>{
    res.sendFile(path.join(__dirname,"frontend","dist","index.html"));
});


app.use("/api/v1" , auth);
app.use("/api/v2", list)


app.listen(port || 3000,()=>{
    console.log("App Listen on Port :" , port);
});






