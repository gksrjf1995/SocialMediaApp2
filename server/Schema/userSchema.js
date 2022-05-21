import mongoose from "mongoose"
const { Schema } = mongoose;


const userSchema = new Schema({
    email : {type:"string" , unique : true },
    name : {type:"string" , },
    password : {type:"string" },
   
   
});

export const userModel = mongoose.model("user",userSchema);