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

// const loginController = (req, res) => {
//     let user_ip = req.headers['x-forwarded-for'] ||
//         req.connection.remoteAddress ||
//         req.socket.remoteAddress ||
//         (req.connection.socket ? req.connection.socket.remoteAddress : null);
//     let user_agent = req.get('User-Agent');

//     let {username, password} = req.body;
//     userApi.post('/user/validate', {username, password, user_agent, user_ip})
//         .then(({data: response}) => {
//             let token = null;
//             if (response.success) {
//                 token = createToken(response.data.username)
//             }
//             res.json({success: response.success, message: response.message, data: {...response.data, token}})

//         })
//         .catch(err => {
//             res.json({success: false, message: err.message})
//         })
// }

// const checkLoginController = (req, res) => {
//     jwt.verify(req.body.token, process.env.JWT_SECRET, function (err, decoded) {
//         // console.log(err)

//         if (decoded) {

//             return userApi.get(`/user/get-user?param=${decoded.username}&by=text`)
//                 .then(({data:response}) => {
//                     if (response.success)

//                         res.json({
//                             data:response.data,
//                             message: 'Đăng nhập thành công !',
//                             success: true
//                         })

//                     else
//                         res.json({
//                             message: response.message,
//                             success: false
//                         })
//                 })
//                 .catch(err => {
//                     res.json({
//                         message: err.message,
//                         success: false
//                     })
//                 });
//         } else {
//             res.json({
//                 message: 'Chưa đăng nhập hoặc hết phiên đăng nhập!',
//                 success: false
//             })
//         }
//     });
// }

module.exports = {
    signUpController
}
