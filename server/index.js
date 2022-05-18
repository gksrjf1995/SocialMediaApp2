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
import google from'passport-google-oauth20'
import MongoStore  from "connect-mongo"
    
const app = express();
const GoogleStrategy  = google.Strategy;
const KakaoStrategy = kakao.Strategy;
dotenv.config();
var hour = 3600000
app.use(session({
    secret: 'gksrjf1995',
    resave: false,
    saveUninitialized: false,
    maxAge: Date.now() + hour,
    store : MongoStore.create({
      mongoUrl : process.env.SERVER_URL,
      ttl : 7 * 12 * 30 * 30,
      autoRemove : 'interval',
      autoRemoveInterval : 60,
    }),
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
    profile.token = accessToken
    profile.user = true;
    done(null,profile);
  }
));

passport.use(new GoogleStrategy({
  clientID: "1087812759980-t0eptdo5s77nma3kn8mp2trvv12vkt46.apps.googleusercontent.com",
  clientSecret: "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",
  callbackURL: "http://localhost:5005/oauth/google/callback"
},
function(accessToken, refreshToken, profile, cb){
  profile.user = true;
  profile.token = accessToken
  cb(null,profile);
}
));


const PORT = process.env.PORT_NUMBER;
const MONGOOSE_URL = process.env.SERVER_URL;

  

app.use(bodyParser.json({limit : "30mb" , extended : true}));
app.use(bodyParser.urlencoded({limit : "30mb" , extended : true}));
app.use(
  cors({
  origin: "http://localhost:3000", 
  credentials: true 
  })); 

app.use("/posts",router);
app.use("/oauth",auth);

mongoose.connect(MONGOOSE_URL);

app.listen(PORT , ()=>{
    console.log(`app 실행 PORT ${PORT}`);
})


