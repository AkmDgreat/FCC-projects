const { StatusCodes } = require("http-status-codes")
const dns = require("dns")

const urlShortner = (req, res) => {

    /* dns.lookup(req.body.original_url, (err) => {
        return res.status(StatusCodes.BAD_GATEWAY).json({ error: 'invalid url' })
    }) */

    res.status(StatusCodes.OK).json({
        original_url: req.body.original_url,
        short_url: 1
    })
}

module.exports = urlShortner