const bcryptjs = require("bcryptjs");
const { v4 } = require("uuid");
const { writeFile, readFile } = require("../api/methods");

const register = async (req, res) => {
    try {
        const { name, gmail, parol } = req.body

        if (!name || !gmail || !parol) {
            return res.status(400).json({ message: "All fields must be filled in!" });
        }

        const readData = readFile("users.json")
        const foundedData = readData.find((item) => item.gmail === gmail)
        if (foundedData) {
            res.json({
                message: "user already exists"
            })
        }

        const hash = await bcryptjs.hash(parol, 10)
        readData.push({
            id: v4(),
            name,
            gmail,
            parol: hash
        })

        writeFile("users.json", readData)
        res.status(201).json({
            message: "Added new users data"
        })

    } catch (error) {
        return res.send(error.message)
    }
}
////////// login
const login = async (req, res) => {
    try {
        const { gmail, parol } = req.body
        if (!gmail || !parol) {
            return res.status(400).json({ message: "All fields must be filled in!" })
        }

        const users = readFile("users.json");

        const user = users.find((item) => item.gmail === gmail);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const isMatch = await bcryptjs.compare(parol, user.parol);
        if (!isMatch) {
            return res.status(401).json({ message: "wrong password" });
        }

        return res.status(200).json({
            message: "Login successfully!"
        });

    } catch (error) {
        return res.send(error.message)
    }
}

module.exports = {
    login,
    register
}