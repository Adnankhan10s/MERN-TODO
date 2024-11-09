// import { Router } from "express";
// import { User } from "../models/user";

// const router = Router();

// router.post("/register" ,(req ,  res)=>{
//     try {
//         const {email ,username , password} = req.body;
//         const user = new User({email , username , password});
//         user.save().then(()=>{
//             res.status(200).json({
//                 user:user
//             });
//         })
//     } catch (error) {
//         res.status(401).json({
//            message:"User Already Exists"
//         });
//     }
// })



// export default router;


// import { Router } from "express";
// import { User } from "../models/user";
// const router = Router()

// router.post("/register" , (req , res)=>{
//     try {
//         const {email , username , password} = req.body;
//         const user = new User({email , username , password});
//         user.save().then(()=>{
//             res.status(200).json({user:user})
//         });


//     } catch (error) {
//         res.status(401).json({
//             message:"User Already Exists"
//         });
//     }

// })
// export default router;
import { Router } from "express";
import { User } from "../models/user.js";
import bcrypt from "bcryptjs";

const router = Router();
//SIGN UP
router.post("/register",async (req, res)=>{
    try {
        const { username , email , password} = req.body;
        const hashPassword = bcrypt.hashSync(password);
        const user = new User({ username , email , password:hashPassword});
        await user.save().then(()=>
            res.status(200).json({
               message:"SignUp successfully"
            }
            )
        )
        
        
    } catch (error) {
        console.log(error)
       res.status(201).json({message:"User Already Exists"});
    }
});
//LOG IN

router.post("/signin", async (req, res)=>{
    try {
        const user = await User.findOne({email:req.body.email});
        if(!user){
            res.status(200).json({message:"Please Sign Up First"});
        }
        const isPasswordCorrect =  bcrypt.compareSync(
            req.body.password,
            user.password
        );
        if(!isPasswordCorrect){
            res.status(401).json({message:"Invalid Password Credential"})
        }
        const {password , ...others}=user._doc;
        res.status(200).json({others});
    }
   catch (error) {
    res.status(500).json({message:"Invalid Credentials"});
    }
});


export default router