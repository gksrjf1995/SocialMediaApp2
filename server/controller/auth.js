import jwt from "jsonwebtoken"
import aixos from "axios"
import CryptoJS  from "crypto-js"
import {userModel} from "../Schema/userSchema.js"
import dotenv from "dotenv"


dotenv.config();


export const logout = (req,res)=>{
    console.log("logout");
    req.logout();
    req.session.destroy();
    res.status(200).redirect("http://localhost:3000/"); 
}

export const success = (req,res)=>{
  
    res.status(200).json({
        user: req.user,
        gitdata : req.session.gitdata,
        sessoin : req.session.login,
      });
}

export const githublogin = async (req,res)=>{
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
};

export const getgitdata = (req,res)=>{
    
    return res.status(200).json({
        gitdata : req.session.gitdata
    });
}

export const homegetData = async (req,res)=>{
  
   try{
    const {email,password} = req.body
    
    const userid = await userModel.findOne({email});
    if(!userid) return res.json({message : "email이 다릅니다. 다시 시도하세용"});
    
   
    let bytes  =  CryptoJS.AES.decrypt(userid.password, process.env.ENCRYPTO_SECRET);
    let originalText = bytes.toString(CryptoJS.enc.Utf8);
    console.log(userid);
     if(originalText=password){
          const Hometoken = jwt.sign({...userid , password : ""},process.env.TOKEN_KEY , {expiresIn : "1h"}); 
          res.status(200).json({userid , token : Hometoken});
     }else{
         return res.status(400).json({message : "password 다름"});
     }
     
     
  
   }catch(err){
       console.log(err);
   }
}

export const singup = async (req,res) => {
    try{
        const 
        {email,
        firstName,
        lastName,
        password,
        cofirmpassword,
         }  = req.body
        
        
         const encryptPass =  CryptoJS.AES.encrypt(password, process.env.ENCRYPTO_SECRET ).toString();
         console.log(encryptPass);
         console.log(firstName,lastName);
         const formdata = { email, name : firstName+lastName, password : encryptPass ,cofirmpassword }
         
         



         const userData = await userModel.create(formdata);   
         await userData.save();
       
         const Hometoken = jwt.sign({id : userData._id , email : userData.email , name : userData.name },process.env.TOKEN_KEY , {expiresIn : "1h"}); 
         res.status(200).json({userid , token : Hometoken});

         
         return res.status(200).json(userData);
    }catch(err){
        console.log(err);
    }
} 