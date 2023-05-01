const { StatusCodes } = require("http-status-codes")
//const dns = require("dns")
const validUrl = require("valid-url")
const urlModel = require("../models/urlModel")

const createUrl = async (req, res) => {
    try {
        /* dns.lookup(req.body.original_url, () => {
            return res.status(StatusCodes.BAD_GATEWAY).json({ error: 'invalid url' })
        }) */

        if (!validUrl.isUri(req.body.original_url)) {
            return res.status(StatusCodes.BAD_REQUEST).json({ error: 'invalid url' })
        }
    
        const num = Math.floor(Math.random() * 10000)
        
        const url = await urlModel.create({
            url: req.body.original_url, // name of properties inside this must be same as the name in urlModel
            shortUrl: num
        })
        res.status(StatusCodes.OK).json({ url })
    } 
    catch (error) {
        res.status(StatusCodes.BAD_REQUEST).json({ error })
    }
}

module.exports = createUrl