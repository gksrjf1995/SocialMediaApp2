import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import router from "./routes/posts.js";
import dotenv from "dotenv"

const app = express();
dotenv.config();
const PORT = process.env.PORT_NUMBER
const MONGOOSE_URL = 'mongodb+srv://SocialMediaApp2:SocialMediaApp2@cluster0.ebdqe.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

app.use(bodyParser.json({limit : "30mb" , extended : true}));
app.use(bodyParser.urlencoded({limit : "30mb" , extended : true}));
app.use(cors());

app.use("/posts",router);


mongoose.connect(MONGOOSE_URL);

app.listen(PORT , ()=>{
    console.log(`app 실행 PORT ${PORT}`);
})


