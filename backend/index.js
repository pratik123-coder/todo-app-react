const express=require("express");
const app=express();
import { createTodo } from "./types";
import { updateTodo } from "./types";
app.use(express.json);

app.post("/todos",(req,res)=>{
    const createPayload=req.body;
    const parsePayload=createTodo.safeParse(createPayload);
    if(!parsePayload.success){
        res.status(411).json({
            mssg:"Wrong inputs",
        })
        return;
    }
    //put it in the database
})

app.get("/todos",(req,res)=>{

})


app.put("/completes",(req,res)=>{

})