require("dotenv").config()
const express = require("express")
const app = express()

app.get("/api", (req,res)=> {
    res.json({
        success:1,
        message: "This rest is wworking"
    })
})

app.listen(process.env.APP_PORT, () => {
    console.log('Sever run on port :' + process.env.APP_PORT)
})














