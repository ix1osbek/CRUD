const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv")
dotenv.config()
const authRouter = require("./routes/auth.routes")
const productRouter = require("./routes/product.routes")


const app = express()
app.use(cors())
app.use(express.json())
app.use(authRouter)
app.use(productRouter)



const PORT = process.env.PORT || 7654
app.listen(PORT, () => {
    console.log(`server is running at ${PORT}`);

})

