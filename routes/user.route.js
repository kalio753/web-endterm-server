const userRouter = require("express").Router()
const {
    signUpController,
    resendVerificationController,
    verificationController
} = require("../controllers/user.controller")

userRouter.post("/signup", signUpController)
userRouter.post("/verification", verificationController)
userRouter.post("/resend-verification", resendVerificationController)
// userRouter.post('/check-login',checkLoginController)

module.exports = userRouter
