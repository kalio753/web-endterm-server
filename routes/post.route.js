const {
    getAllPostsController,
    uploadPostsController,
    getPostByIdController,
    deletePostController,
} = require("../controllers/post.controller")

const postRouter = require("express").Router()

postRouter.post("/get-all", getAllPostsController)
postRouter.post("/get-by-id", getPostByIdController)
postRouter.post("/upload", uploadPostsController)
postRouter.post("/delete", deletePostController)

module.exports = postRouter
