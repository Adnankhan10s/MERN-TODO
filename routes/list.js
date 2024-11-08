import { Router } from "express";
import { User } from "../models/user.js";
import { List } from "../models/list.js";


const router = Router();
//CREATE TODO 
router.post("/addTask", async (req , res)=>{
   try {
     const {title , body , id}=req.body;
     const existingUser = await User.findById(id);
     if(existingUser){
         const list = new List({title , body, user:existingUser});
         await list.save().then(()=>
            res.status(200).json({list})
         );
         existingUser.list.push(list);
         existingUser.save()
     }
   } catch (error) {
    console.log(error)
   }

});

//UPDATE

router.put("/updateTask/:id", async(req , res)=>{
    try {
        
            const {title , body} = req.body;
            const list = await List.findByIdAndUpdate(req.params.id , {title , body});
            list.save().then(()=> res.status(200).json({message:"Task Updated Successfully"}));
        
        
    } catch (error) {
        console.log(error)
    }

})

//DELETE

router.delete("/deleteTask/:id" , async (req , res)=>{
    try {
        const {id} = req.body;
        const existingUser = await User.findByIdAndUpdate(id , {$pull:{list: req.params.id}});
        if(existingUser){
            const list = await List.findByIdAndDelete(req.params.id)
            .then(()=>res.status(200).json({message:"Task Deleted Successfully"}));

        }
        
    } catch (error) {
        console.log(error);
    }
})

//GET TASK
router.get("/getTasks/:id" , async (req , res)=>{
   try {
     const list = await List.find({user: req.params.id}).sort({createdAt: -1});
   
     if(list.length !== 0){
         res.status(201).json({list:list});
     }
   } catch (error) {
    res.status(201).json({message:"Task Not Found"});
    console.log(error)
   }
   
});




export default router;