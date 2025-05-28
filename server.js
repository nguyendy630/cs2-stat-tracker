import cors from "cors"
import axios from "axios"
import dotenv from "dotenv"
import express from "express"

dotenv.config({path: ".env"})

const app = express()
const PORT = 8888;

app.use(cors())

// Steam CS2 API Data
app.get('/results', (req, res) => {
    const options = {
        key: process.env.API_KEY,
        appid: 730,
        steamid: req.query.steamid
    }
    
    axios.request(`https://api.steampowered.com/ISteamUserStats/GetUserStatsForGame/v0002/?appid=${options.appid}&key=${options.key}&steamid=${options.steamid}`)
        .then((response) => {
            res.json(response.data)
        }).catch((error) => {
            console.log(error)
        })
})

// Steam ID API Data
app.get('/player', (req, res) => {
    const options = {
        key: process.env.API_KEY,
        appid: 730,
        steamid: req.query.steamid
    }
    
    axios.request(`https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${options.key}&steamids=${options.steamid}`)
        .then((response) => {
            res.json(response.data)
        }).catch((error) => {
            console.log(error)
        })
})

app.get('/', (req, res) => {
    res.json("Hi")
})

app.listen(PORT, () => console.log(`Sever is running on Port ${PORT}`)) 