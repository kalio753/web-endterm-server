const {mediaApi} = require("../utils/axios");

const downloadController = (req, res) => {
    const {path} = req.body;
    try {
        mediaApi.get(path, {responseType: 'stream'})
            .then(response => {
                res.set('content-length', response.headers['content-length']);
                res.set('content-disposition', response.headers['content-disposition']);
                response.data.pipe(res)
            })
            .catch(err => {
                return res.json({success: false, message: err.message})
            })

    } catch (e) {
        return res.json({success: false, message: e.message})
    }
}

module.exports = {
    downloadController
}