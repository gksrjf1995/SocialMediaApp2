import express from "express"
import mongoose from "mongoose";
import postModel from "../Schema/postSchema.js";

export const getposts = async (req,res) =>{
   const allPosts = await postModel.find({});

   res.status(200).json(allPosts);
}

export const createpost = async ( req,res ) => {
    try{
        const post = req.body
         
      
        const createdpost = new postModel(post);
        await createdpost.save();
        res.status(200).json(createdpost);
    }catch(err){
        console.log(err);
    }
}

export const updatePost = async (req,res) => {
    const {id} = req.params
    const post = req.body
    console.log(post);
    if(!mongoose.isValidObjectId(id)) return res.status(404).send("포스트가 없습니다.");

    try{
        const result = await postModel.findByIdAndUpdate({_id : id},post);

        return res.status(200).json(result);
    }catch(err){
        console.log(err);
    }
}