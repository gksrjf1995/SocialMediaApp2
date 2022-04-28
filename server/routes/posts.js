import { Router } from "express";
import {getposts , createpost} from "../controller/posts.js"

const router = Router();

router.get("/",getposts);
router.post("/",createpost);


export default router;