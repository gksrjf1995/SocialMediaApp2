import { Router } from "express";
import passport, { Passport } from "passport";




const auth = Router();


auth.get("/kakao", passport.authenticate("kakao"));

auth.get("/success",(req,res)=>{
 
    console.log("req.user"+ req.user);
    res.status(200).json({
        success: true,
        message: "successfull",
        user: req.user,
      });
});

auth.get("/kakao/callback", passport.authenticate("kakao",{
    successRedirect : "http://localhost:3000",
    failureRedirect : "/login/failed"
}));



export default auth