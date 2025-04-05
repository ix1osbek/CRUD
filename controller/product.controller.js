const { readFile, writeFile } = require("../api/methods.js")
const { v4 } = require("uuid")

////////// get product

const getProduct = async (req, res) => {
    try {
        const data = readFile("products.json")
        res.status(200).json(data)

    } catch (error) {
        return res.send(error.message)
    }

}



const get_one_product = async (req, res) => {
    try {
        const data = readFile("products.json")
        console.log(req.params.id);

        const product = data.find((item) => item.id === req.params.id)

        if (!product) {
            return res.status(404).json({ message: "product not found" })
        }

        res.status(200).json(product)
    } catch (error) {
        return res.send(error.message)
    }
}



const add_product = async (req, res) => {
    try {
        const data = readFile("products.json")
        const newProduct = {
            id: v4(),
            ...req.body
        }

        data.push(newProduct)

        writeFile("products.json", data)
        res.status(201).json({ message: "add new product" })

    } catch (error) {
        return res.send(error.message)
    }
}



const update_product = async (req, res) => {
    try {
        const { id } = req.params

        const { price, quantity, title } = req.body

        const data = readFile("products.json")
        data.forEach((item) => {
            if (item.id === id) {
                item.title = title ? title : item.title
                item.quantity = quantity ? quantity : item.quantity
                item.price = price ? price : item.price
            }
        })
        writeFile("products.json", data)
        res.status(201).json({ message: "product sucsess update" })
    } catch (error) {
        return res.send(error.message)
    }
}



const delete_product = async (req, res) => {
    try {
        const { id } = req.params

        const data = readFile("products.json")
        data.forEach((item , idx) => {
            if (item.id === id) {
            data.splice(idx ,1)
            }
        })
        writeFile("products.json", data)
        res.status(201).json({ message: "product sucsess delete" })
    } catch (error) {
        return res.send(error.message)
    }
}

module.exports = {
    getProduct,
    add_product,
    delete_product,
    update_product,
    get_one_product
}