const profileRouter = require("express").Router()
const {
    getMyProfileController,
    getProfileByIdController,
    updateProfileController
} = require("../controllers/profile.controller")

profileRouter.post("/get-me", getMyProfileController)
profileRouter.post("/get-by-id", getProfileByIdController)
profileRouter.post("/update", updateProfileController)

module.exports = profileRouter
