const userRouter = require("express").Router()
const { signUpController } = require("../controllers/user.controller")

userRouter.post("/signup", signUpController)
// userRouter.post('/check-login',checkLoginController)

module.exports = userRouter
