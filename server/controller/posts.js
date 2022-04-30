import express from "express"
import postModel from "../Schema/postSchema.js";

export const getposts = async (req,res) =>{
   const allPosts = await postModel.find({});

   res.status(200).json(allPosts);
}

export const createpost = async ( req,res ) => {
    try{
        const {creator,
            title,
            message,
            tags,
            selectFile,} = req.body
        console.log("실행");
        console.log(
            
            
            tags);
        const newpost = {
           

        }    
        const createdpost = new postModel(newpost);
        await createdpost.save();
        res.status(200).json(createdpost);
    }catch(err){
        console.log(err);
    }
}
