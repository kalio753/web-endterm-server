const { AxiosBackend } = require("../utils/axios")

const getAllPostsController = (req, res) => {
    const { token } = req.body
    try {
        AxiosBackend.request({
            headers: { Authorization: `Bearer ${token}` },
            url: "/post",
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

const uploadPostsController = (req, res) => {
    const { token, body } = req.body
    try {
        AxiosBackend.request({
            headers: { Authorization: `Bearer ${token}` },
            url: "/post",
            method: "post",
            data: body
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

module.exports = { getAllPostsController, uploadPostsController }
