import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import router from "./routes/posts.js";
import dotenv from "dotenv"
import session from "express-session";
import { Passport } from "passport";
    
const app = express();

app.use(session({
    secret: 'gksrjf1995',
    resave: false,
    saveUninitialized: true,
    cookie : {maxAge : 60000},
}));

dotenv.config();
const PORT = process.env.PORT_NUMBER;
const MONGOOSE_URL = process.env.SERVER_URL;

app.use("/",(req,res,next)=>{
    req.session.name = "Hangeol",
    next();
});

app.use(bodyParser.json({limit : "30mb" , extended : true}));
app.use(bodyParser.urlencoded({limit : "30mb" , extended : true}));
app.use(cors());

app.use("/posts",router);


mongoose.connect(MONGOOSE_URL);

app.listen(PORT , ()=>{
    console.log(`app 실행 PORT ${PORT}`);
})


