import { Router } from "express";
import {getposts , createpost , updatePost} from "../controller/posts.js"

const router = Router();

router.get("/",getposts);
router.post("/",createpost);
router.patch("/:id",updatePost);

export default router;