const { AxiosBackend } = require("../utils/axios")

const getMyProfileController = (req, res) => {
    const { token } = req.body
    try {
        AxiosBackend.request({
            headers: { Authorization: `Bearer ${token}` },
            url: "/user/profile/me",
            method: "get"
        })
            .then((result) => {
                res.json(result.data)
            })
            .catch((err) => {
                res.json(err)
                console.log("err", err)
            })
    } catch (e) {
        return res.json({ success: false, message: e.message })
    }
}

const getProfileByIdController = (req, res) => {
    const { token, id } = req.body
    try {
        AxiosBackend.request({
            headers: { Authorization: `Bearer ${token}` },
            url: `/user/profile/${id}`,
            method: "get"
        })
            .then((result) => {
                res.json(result.data)
            })
            .catch((err) => {
                res.json(err)
                console.log("err", err)
            })
    } catch (e) {
        return res.json({ success: false, message: e.message })
    }
}

module.exports = {
    getMyProfileController,
    getProfileByIdController
}
