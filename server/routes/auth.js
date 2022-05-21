import { Router } from "express";
import passport from "passport";
import {singup , logout , success , githublogin , getgitdata , homegetData } from "../controller/auth.js"




const auth = Router();


auth.get("/kakao", passport.authenticate("kakao"));
auth.get('/google', passport.authenticate('google', { scope: ['profile',"email"] }));
auth.get("/kakao/callback", passport.authenticate("kakao",{
    successRedirect : "http://localhost:3000",
    failureRedirect : "/login/failed"
}));

auth.get("/google/callback", passport.authenticate("google",{
    successRedirect : "http://localhost:3000",
    failureRedirect : "/login/failed"
}));

auth.get("/logout", logout);
auth.get("/success",success);

auth.get("/github/callback",githublogin);
auth.get("/github/getdata",getgitdata);

auth.post("/login",homegetData);
auth.post("/signup",singup);
export default auth