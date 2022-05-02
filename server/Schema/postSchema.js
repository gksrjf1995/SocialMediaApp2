import mongoose from "mongoose";
const { Schema } = mongoose;

const postsSchema = mongoose.Schema({
    title : {type : String},
    message : {type : String},
    creator : {type : String},
    tags : {type: [String]},
    selectFile : String,
    likeCount : {
        type : Number,
        default : 0
    },


},{new : true , timestamps : true});

const postModel = mongoose.model('postsSchema',postsSchema);

export default postModel