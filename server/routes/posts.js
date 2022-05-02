import { Router } from "express";
import {getposts , createpost , updatePost , deletePost} from "../controller/posts.js"

const router = Router();

router.get("/",getposts);
router.post("/",createpost);
router.patch("/:id",updatePost);
router.delete("/:id",deletePost);
export default router;