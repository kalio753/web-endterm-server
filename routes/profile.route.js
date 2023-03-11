const profileRouter = require("express").Router()
const {
    getMyProfileController,
    getProfileByIdController,
    updateProfileController,
    updateCoverController,
    updateAvtController,
} = require("../controllers/profile.controller")

profileRouter.post("/get-me", getMyProfileController)
profileRouter.post("/get-by-id", getProfileByIdController)
profileRouter.post("/update", updateProfileController)
profileRouter.post("/update-cover", updateCoverController)
profileRouter.post("/update-ava", updateAvtController)

module.exports = profileRouter
