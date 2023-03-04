import axios from "axios"
/* request pre-processing */

// BACK-END URL
axios.defaults.baseURL = "http://192.168.60.194:3333"
axios.interceptors.request.use(
    (config) => {
        // add header token

        // config.headers["Authorization"] = `Bearer ${localStorage.getItem(
        //     "access_token"
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

export const AxiosBackend = axios.create()
