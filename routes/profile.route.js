const profileRouter = require("express").Router()
const {
    getMyProfileController,
    getProfileByIdController
} = require("../controllers/profile.controller")

profileRouter.post("/get-me", getMyProfileController)
profileRouter.post("/get-by-id", getProfileByIdController)

module.exports = profileRouter
