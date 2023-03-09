const axios = require("axios")
/* request pre-processing */

// BACK-END URL
axios.defaults.baseURL = "http://192.168.169.34:8000"
axios.interceptors.request.use(
    (config) => {
        // add header token

        // config.headers["Authorization"] = `Bearer ${localStorage.getItem(
        //     "token"
        // )}`

        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)
axios.interceptors.response.use(
    (response) => {
        if (response && response.data) {
            return response.data
        }
        return response
    },
    (error) => {
        throw error
    }
)

const AxiosBackend = axios.create()

module.exports = { AxiosBackend }
