const express = require("express")
const router = express.Router()

const UtcAndUnix = require("../Controllers/UtcAndUnix")
const currentTime = require("../Controllers/currentTime")

router.route("/api/:date").post(UtcAndUnix)
router.route("/api").post(currentTime)

module.exports = router