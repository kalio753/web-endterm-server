const { AxiosBackend } = require("../utils/axios")

const signUpController = (req, res) => {
    let { userName, fullName, email, password, confirmPassword, phone } =
        req.body
    AxiosBackend.post("/authentication/signup", {
        username: userName,
        email,
        full_name: fullName,
        password: password,
        password_confirm: confirmPassword,
        phone
    })
        .then((result) => {
            res.json(result.data)
            // console.log("1", result.data)
        })
        .catch((err) => {
            res.json(err)
            console.log("err", err)
        })
}

const verificationController = (req, res) => {
    let { token } = req.body
    AxiosBackend.post(`/authentication/signup-verify?token=${token}`, {})
        .then((result) => {
            res.json(result.data)
        })
        .catch((err) => {
            res.json(err)
            console.log("err", err)
        })
}

const resendVerificationController = (req, res) => {
    let { user } = req.body
    AxiosBackend.post(`/authentication/resend-verify?user=${user}`, {})
        .then((result) => {
            res.json(result.data)
        })
        .catch((err) => {
            res.json(err)
            console.log("err", err)
        })
}

const loginController = (req, res) => {
    let { userName, password, isRemember } = req.body
    console.log(req.body)
    AxiosBackend.post(`/authentication/login`, {
        user: userName,
        password: password,
        remember_me: isRemember
    })
        .then((result) => {
            res.json(result.data)
        })
        .catch((err) => {
            res.json(err)
            console.log("err", err)
        })
}

const suggestFriendController = (req, res) => {
    let { token } = req.body
    AxiosBackend.request({
        url: `/user/suggest-friends`,
        headers: { Authorization: `Bearer ${token}` },
        method: "get"
    })
        .then((result) => {
            res.json(result.data)
        })
        .catch((err) => {
            res.json(err)
            console.log("err", err)
        })
}

module.exports = {
    signUpController,
    verificationController,
    resendVerificationController,
    loginController,
    suggestFriendController
}
