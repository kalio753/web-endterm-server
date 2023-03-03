const userRouter = require('express').Router()
const {loginController,checkLoginController} = require("../controllers/user.controller");

userRouter.post('/login',loginController)
userRouter.post('/check-login',checkLoginController)

module.exports=userRouter