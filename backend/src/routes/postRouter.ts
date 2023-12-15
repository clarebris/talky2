import { Router } from "express";

import { verifyToken } from "../middleware/verifyToken";
import { createPost, deletePost, editPost, getPost, getPostLikes, getPosts, toggleLikePost } from "../controllers/postController";

const post_router = Router();

post_router.post("/createPost",verifyToken, createPost);
post_router.put("/editPost",verifyToken, editPost);
post_router.delete("/:post_id", verifyToken, deletePost);
post_router.get('/', verifyToken, getPosts)
post_router.get("/:post_id", verifyToken, getPost);
post_router.post("/toggleLikePost",verifyToken, toggleLikePost);
post_router.get("/like/:post_id",verifyToken, getPostLikes);

export default post_router;