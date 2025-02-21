const {createUser} = require("./user.controler")
const router = require("express").Router()

router.post("/", createUser)

module.exports = router







