const productRouter = require("express").Router()
const {getProduct , get_one_product , delete_product ,update_product ,add_product}= require("../controller/product.controller.js")

////// get product
productRouter.get("/get_all_products"  , getProduct)

////////  get one product

productRouter.get("/get_one_product/:id" , get_one_product)


/////////// add product

productRouter.post("/add_product" , add_product)

////// update product

productRouter.put("/update_product/:id" , update_product)

//// delete product

productRouter.delete("/delete_product/:id" , delete_product)


module.exports= productRouter








