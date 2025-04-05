const authRouter = require("express").Router()
const { register, login } = require("../controller/auth.controller")

// const authRouter = Router()
///// auth register 

authRouter.post("/register", register)

//////// auth login

authRouter.post("/login", login)

module.exports= authRouter

