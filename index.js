
const express = require("express")
const bodyparser = require("body-parser")
const routes = require('./routes')

const app = express()
app.use(bodyparser.json())

const port = process.env.PORT || 8005
 
app.get("/", async (req, res) => {
  res.json({ "message": "HEROKU SERVER FOR ARPAN APP - PLEASE AVOID HITTING THIS URL - THANK YOU :D" })
})

app.use('/api', routes)

app.listen(port, () => {
  console.log("listening to port" + port)

})
