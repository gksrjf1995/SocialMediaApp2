import express from "express"
import mongoose from "mongoose";
import postModel from "../Schema/postSchema.js";

export const getposts = async (req,res) =>{
   const allPosts = await postModel.find({});
   
   try{

        
       res.status(200).json(allPosts);
   }catch(err){
       console.log(err);    
   }
   
}

export const createpost = async ( req,res ) => {
    try{
        const post = req.body
        console.log(post);
      
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
   
    if(!mongoose.isValidObjectId(id)) return res.status(404).send("포스트가 없습니다.");

    try{
        const result = await postModel.findByIdAndUpdate({_id : id}, {...post , _id : id} , {new : true , upsert: true});

        return res.status(200).json(result);
    }catch(err){
        console.log(err);
    }
}

export const deletePost = async ( req,res) => {
    const {id} = req.params
    console.log(id);
    if(!mongoose.isValidObjectId(id)) return res.status(404).send("이미 삭제 되었습니다.");

    try{
        const result = await postModel.findByIdAndDelete({_id : id},{new : true});
        
        return res.status(200).json(result);
    }catch(err){
        console.log(err);
    }
}

export const likepost = async( req , res ) => {
    const {id} = req.params
    if(!mongoose.isValidObjectId(id)) return res.status(400).send("오류"); 
    try{
        const findone = await postModel.findById({_id : id});
        const result = await postModel.findByIdAndUpdate({_id : id},{
            likeCount : findone.likeCount + 1
        },{new : true});
        res.status(200).json(result);
    }catch(err){
       console.log(err);
      
    }
}