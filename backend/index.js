const express=require("express");
const app=express();
import { todo } from "./db";
import { createTodo } from "./types";
import { updateTodo } from "./types";
app.use(express.json);

app.post("/todos",async(req,res)=>{
    const createPayload=req.body;
    const parsePayload=createTodo.safeParse(createPayload);
    if(!parsePayload.success){
        res.status(411).json({
            mssg:"Wrong inputs",
        })
        return;
    }
    await todo.create({
        title:createPayload.title,
        description:createPayload.description,
        completed:false
    })
})

app.get("/todos",async (req,res)=>{
    const todos=await todo.find();
    res.json({
        todos
    })
})


app.put("/completes",async(req,res)=>{
    const updatePayload=req.body;
    const parsePayload=updateTodo.safeParse(updatePayload);
    if(!parsePayload.success){
        res.status(411).json({
            mssg:"wrong inputs"
        })
    }
    await todo.update({
        _id:req.body.id
    },{
        completed:true
    })
    res.json({
        msg:"todo completed"
    })
})