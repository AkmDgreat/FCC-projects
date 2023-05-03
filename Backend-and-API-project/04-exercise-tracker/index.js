const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()

const router = require("./router/route")

app.use(cors())
app.use(express.static('public'))
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html')
})

app.use(express.json())
app.use("/api/users", router)

const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('Your app is listening on port ' + listener.address().port)
})
