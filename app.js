let express = require("express")
const PORT = process.env.PORT || 5000

let app = express()

app.get("/", (req, res)=> {
    res.send("jejejejeje")
})

app.listen(PORT, ()=> console.log("server"))