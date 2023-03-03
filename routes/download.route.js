const downloadRouter = require('express').Router()
const {downloadController} = require("../controllers/download.controller");

downloadRouter.post('/',downloadController)

module.exports=downloadRouter