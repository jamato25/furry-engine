const express = require("express")
const morgan = require("morgan")
const path = require("path")

const PORT = process.env.PORT || 3000
const app = express()

app.use(morgan)
app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, '../public')))

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`)
})
