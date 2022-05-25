import auth from "../../routes/auth.js";

export const middleware =  auth.use((req,res,next)=>{
    console.log(req.session);
    next();
});