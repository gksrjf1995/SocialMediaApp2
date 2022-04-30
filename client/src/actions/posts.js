import axios from "axios";
const API = axios.create({baseURL : "http://localhost:5005/"});

export const getposts = () => async (dispatch) => {
    try{
        const res = await axios.create({baseURL : "http://localhost:5005/"}).get("/posts");

        dispatch({type:"FETCH_ALL" , payload : res});

    }catch(err){
        console.log(err);
    } 
}; 

export const createPost = (newpost) => async (dispatch) => {
    try{
        const res = await API.post("/posts" , newpost);
        console.log(newpost);
        
        console.log(res);
        dispatch({type:"CREATE" , payload : res.data});

    }catch(err){
        console.log(err);
    }
}