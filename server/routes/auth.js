import { Router } from "express";
import passport, { Passport } from "passport";




const auth = Router();


auth.get("/kakao", passport.authenticate("kakao"));
auth.get('/google', passport.authenticate('google', { scope: ['profile',"email"] }));
auth.get("/logout", (req,res)=>{
    console.log("logout");
    req.logout();
    res.status(200).redirect("http://localhost:3000/");
        
});

auth.get("/success",(req,res)=>{
    req.session.login = true;
    res.status(200).json({
        success: true,
        message: "successfull",
        user: req.user,
        sessoin : req.session.login,
      });
});

auth.get("/kakao/callback", passport.authenticate("kakao",{
    successRedirect : "http://localhost:3000",
    failureRedirect : "/login/failed"
}));

auth.get("/google/callback", passport.authenticate("google",{
    successRedirect : "http://localhost:3000",
    failureRedirect : "/login/failed"
}));


export default auth