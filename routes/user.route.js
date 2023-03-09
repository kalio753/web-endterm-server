const userRouter = require("express").Router()
const {
    signUpController,
    resendVerificationController,
    verificationController,
    loginController,
    suggestFriendController
} = require("../controllers/user.controller")

userRouter.post("/signup", signUpController)
userRouter.post("/login", loginController)
userRouter.post("/verification", verificationController)
userRouter.post("/suggest-friend", suggestFriendController)
userRouter.post("/resend-verification", resendVerificationController)

// userRouter.post('/check-login',checkLoginController)

module.exports = userRouter
