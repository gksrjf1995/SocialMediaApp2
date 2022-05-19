import { Router } from "express";
import passport, { Passport } from "passport";
import aixos from "axios"



const auth = Router();


auth.get("/kakao", passport.authenticate("kakao"));
auth.get('/google', passport.authenticate('google', { scope: ['profile',"email"] }));
auth.get("/logout", (req,res)=>{
    console.log("logout");
    req.logout();
    req.session.destroy();
    res.status(200).redirect("http://localhost:3000/");
        
});

auth.get("/success",(req,res)=>{
  
    res.status(200).json({
        user: req.user,
        gitdata : req.session.gitdata,
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

auth.get("/github/callback", async(req,res)=>{
    const optionUrl = {
        client_id : "6883f433e1c1f25b525f",
        github_secret : "d9d3b3630170ae3d3c011a88bd265d04e76a1e22",   
    }
    const code = req.query.code
    
    try{
        const data = await aixos.post(`https://github.com/login/oauth/access_token?client_id=${optionUrl.client_id}&client_secret=${optionUrl.github_secret}&code=${code}`,{
            headers : {
                "Content-Type": "application/json"
            }
        })
           
        const result = new URLSearchParams(data.data);
        
        const token = result.get("access_token");
        const token_type = result.get("token_type");
        if(token){
            req.session.gittoken = token
            console.log(token);
            const get_token = await aixos.get("https://api.github.com/user",{
                headers : {
                    Authorization: `token  ${token}`
                }
            });
            
            req.session.gitdata = get_token.data
            req.session.gitdata.token = token
            return res.status(200).redirect("http://localhost:3000");

        }
        
    }catch(err){
        console.log(err);
    }
});
auth.get("/github/getdata",(req,res)=>{
    
    return res.status(200).json({
        gitdata : req.session.gitdata
    });
});

export default auth