import mongoose from "mongoose";
// mongodb+srv://user1:user@cluster0.zxclfqc.mongodb.net/
mongoose.connect("mongodb+srv://user1:user@cluster0.zxclfqc.mongodb.net/")
const todoSchema=mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean
})

export const todo=mongoose.model('todos',todoSchema);

