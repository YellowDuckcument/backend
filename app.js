require("dotenv").config()
const express = require("express")
const app = express()
const userRouter = require("./api/users/user.router")


app.use("/api/users", (req, res, next) => {
    if (req.method === "POST") {
      console.log(`${req.method} ${req.url} HTTP/${req.httpVersion}`);
    }
    next();
  }
);

app.use(express.json())

app.use("/api/users", userRouter)

app.post('/api/users', () => console.log('hello'))


app.listen(process.env.APP_PORT, () => {
    console.log('Sever run on port :' + process.env.APP_PORT)
})














