require("dotenv").config()
const express = require("express")
const cors = require("cors")
const app = express()
const router = require("./router/route")

const port = process.env.PORT || 3000

app.use(cors())

app.use("/public", express.static(`${process.cwd()}/public`))
app.use(express.json())
app.use("/", router)

app.get("/", function (req, res) {
  res.sendFile(process.cwd() + "/views/index.html")
})

app.get("/api/hello", function (req, res) {
  res.json({ greeting: "hello API" })
})

app.listen(port, function () {
  console.log(`Listening on port ${port}`)
})
