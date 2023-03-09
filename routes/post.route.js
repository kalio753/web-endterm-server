const {
    getAllPostsController,
    uploadPostsController
} = require("../controllers/post.controller")

const postRouter = require("express").Router()

postRouter.post("/get-all", getAllPostsController)
postRouter.post("/upload", uploadPostsController)

module.exports = postRouter
