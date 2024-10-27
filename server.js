require("dotenv").config()

const express = require("express")
const app = express()

app.get("/", (req, res) => {
  res.send("the server is running")
})
let PORT = process.env.PORT
app.listen(PORT, () => {
  console.log("Server is running " + PORT)
  console.log(`Your Secret Password Is: ${process.env.SECRET_PASSWORD}`)
})
