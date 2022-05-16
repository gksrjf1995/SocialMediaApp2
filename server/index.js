import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import router from "./routes/posts.js";
import dotenv from "dotenv"
import session from "express-session";
import passport from "passport";
import kakao from "passport-kakao"
import auth from "./routes/auth.js";
    
const app = express();
const KakaoStrategy = kakao.Strategy;
app.use(session({
    secret: 'gksrjf1995',
    resave: false,
    saveUninitialized: true,
}));

app.use(passport.initialize());
app.use(passport.session());


passport.serializeUser((id,done)=>{
  done(null,id);
});

passport.deserializeUser((id,done)=>{ 
  done(null,id);
});

passport.use(new KakaoStrategy({
    clientID: "683982064dea966dfeccde0a2a056486",   
    callbackURL: "http://localhost:5005/oauth/kakao/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    
    done(null,profile);
  }
));

dotenv.config();
const PORT = process.env.PORT_NUMBER;
const MONGOOSE_URL = process.env.SERVER_URL;

app.use("/",(req,res,next)=>{
    
    next();
});

app.use(bodyParser.json({limit : "30mb" , extended : true}));
app.use(bodyParser.urlencoded({limit : "30mb" , extended : true}));
app.use(
    cors({
      origin: "http://localhost:3000", // server의 url이 아닌, 요청하는 client의 url
      credentials: true
    }));

app.use("/posts",router);
app.use("/oauth",auth);

mongoose.connect(MONGOOSE_URL);

app.listen(PORT , ()=>{
    console.log(`app 실행 PORT ${PORT}`);
})


