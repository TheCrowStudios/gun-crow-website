const { randomInt } = require("crypto")
const express = require("express")
const fs = require("fs")
const app = express()
const titleText = [ "The highest testosterone game", "The crows shall guide thee", "Crower uwu", "We have to save the world", "Made by TheCrowStudios", "The sickest soundtrack", "Awesome graphics", "Crow Crow Crow" ]

let CreateLog;

app.set("view-engine", "ejs")
app.set("views", `${__dirname}/views`)

app.use(express.static(`${__dirname}/public/`))

app.get("/", (req, res) => {
    CreateLog(req, `GET request to /`)
    let text = titleText[randomInt(titleText.length)]
    res.render("index.ejs", { titleText: text })
})

function CreateLogGunCrow(req, text)
{
    let log = `${(new Date()).toLocaleString()} Gun Crow ${req.ip} ${text}`
    console.log(log)
    fs.appendFile("log.txt", `${log}\n`, (err) => {
        if (err) console.log(err)
    })
}

function SetLoggingFunction(func)
{
    CreateLog = func
}

module.exports = app
module.exports.SetLoggingFunction = SetLoggingFunction