const express = require("express")
const router = express.Router()
const urlShortner = require("../controllers/urlShortner")
const redirect = require("../controllers/redirect")

router.route("/api/shorturl").post(urlShortner)
router.route("/api/shorturl/:inputShortUrl").get(redirect)

module.exports = router