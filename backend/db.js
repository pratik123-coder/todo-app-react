const mongoose = require("mongoose")
// mongodb+srv://user1:user@cluster0.zxclfqc.mongodb.net/
mongoose.connect("mongodb+srv://user1:user@cluster0.zxclfqc.mongodb.net/")
const todoSchema=mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean
})

const todo=mongoose.model('todos',todoSchema);

module.exports={todo}