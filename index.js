require("dotenv").config()
const express = require("express")
const path = require("path")
const postRouter = require("./routes/post.route")
const profileRouter = require("./routes/profile.route")
const userRouter = require("./routes/user.route")
const multer = require("multer")

const app = express()
const PORT = process.env.PORT || 5000

// TODO Serve static resources
app.use("/files", express.static("files"))
app.use(express.static("files"))

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

// Axios flow: from here --> routes --> controllers (take
//             axios config from utils to call api from be server)
app.use("/api/user", userRouter)
app.use("/api/profile", profileRouter)
app.use("/api/post", postRouter)
// From 2nd para is a list of function that will be called
// when get into this endpoint
// app.use("/download", downloadRouter)

// TODO production serve client
// if (process.env.NODE_ENV === "production") {
// Serve any static files
app.use(express.static(path.join(__dirname, "client/dist")))

// Handle React routing, return all requests to React app
app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "client/dist", "index.html"))
})
// }

// TODO multer upload
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const { type } = req.query
        if (type === "avatars") {
            cb(null, "files/avatars")
        } else if (type === "covers") {
            cb(null, "files/covers")
        } else {
            cb(null, "files/posts")
        }
    },

    filename: (req, file, cb) => {
        console.log(file)
        cb(null, Date.now() + "_" + file.originalname)
    },
})

const maxFileSize = 10 * 1024 * 1024 // 10 MB
const upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        var ext = path.extname(file.originalname)
        if (
            ext !== ".png" &&
            ext !== ".jpg" &&
            ext !== ".gif" &&
            ext !== ".webm" &&
            ext !== ".jpeg" &&
            ext !== ".txt" &&
            ext !== ".doc" &&
            ext !== ".docx" &&
            ext !== ".xlsx" &&
            ext !== ".xls" &&
            ext !== ".pdf" &&
            ext !== ".mp3" &&
            ext !== ".mp4"
        ) {
            return cb(new Error("Only images & documents are allowed"))
        }
        cb(null, true)
    },
    limits: { fileSize: maxFileSize },
}).single("file")

app.post("/upload", (req, res) => {
    const { type } = req.query
    upload(req, res, function (err) {
        if (err instanceof multer.MulterError) {
            // A Multer error occurred when uploading.\
            res.json(err)
        } else if (err) {
            // An unknown error occurred when uploading.
            res.json({ code: err.message })
            console.log(err)
        } else {
            // Everything went fine.
            console.log(req.file)
            if (req.file) {
                res.json(`/${req.file.destination}/${req.file.filename}`)
            } else {
                //
            }
        }
    })
})

// app.use("/", (req, res) => {
//     res.json("This is root page")
// })

//TODO run server
let server = app.listen(PORT, () => {
    console.log(`🚀 Server listening on port ${server.address().port}`)
})
