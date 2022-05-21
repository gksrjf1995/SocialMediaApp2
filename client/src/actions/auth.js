import axios from "axios";


const API = axios.create({baseURL : "http://localhost:5005"});


export const homesignin = (formdata , navgate) => async (dispatch) => {
    try {
        console.log(formdata);
        const res = await API.post("/oauth/login",formdata); 
        console.log(res.data);
        navgate("/");
        
    } catch (error) {
        console.log(error);
    }
}

export const homesignup = (forDate , navgate) => async (dispatch) =>{
    try {
        console.log(forDate);
        const res = await API.post("/oauth/signup",forDate);
        console.log(res);
        navgate("/");
        
    } catch (error) {
        console.log(error);
    }
}