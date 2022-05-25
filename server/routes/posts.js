import { Router } from "express";
import { middleware } from "../controller/middleware/middleware.js";
import {getposts , createpost , updatePost , deletePost , likepost} from "../controller/posts.js"

const router = Router();


router.get("/" , middleware , getposts);
router.post("/",createpost);
router.patch("/:id",updatePost);
router.delete("/:id",deletePost);
router.patch("/:id/likepost",likepost);
export default router;