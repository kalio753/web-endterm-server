require("dotenv").config()
const express = require("express")
const path = require("path")

const app = express()
const PORT = process.env.PORT || 5000

// TODO Enable CORS
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS")
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Accept-Encoding, Accept-Language, Access-Control-Request-Headers, Access-Control-Request-Method"
    )
    next()
})
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// TODO production serve client
if (process.env.NODE_ENV === "production") {
    // Serve any static files
    app.use(express.static(path.join(__dirname, "client/dist")))

    // Handle React routing, return all requests to React app
    app.get("*", function (req, res) {
        res.sendFile(path.join(__dirname, "client/dist", "index.html"))
    })
}

//TODO run server
let server = app.listen(PORT, () => {
    console.log(`🚀 Server listening on port ${server.address().port}`)
})
