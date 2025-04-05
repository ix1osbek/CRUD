const fs = require("fs")

const readFile = (file_name) => {
    return JSON.parse(fs.readFileSync(`./module/${file_name}`, "utf-8"))
}

const writeFile = (file_name, data) => {
    return fs.writeFileSync(`./module/${file_name}`, JSON.stringify(data, null, 4))
}

module.exports = {
    writeFile,
    readFile
}