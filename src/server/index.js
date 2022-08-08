const dotenv = require('dotenv').config()
const webpack = require('webpack')
const webpackDevServer = require('webpack-dev-server')
const express = require('express')
const bodyParser = require('body-parser')
const fetch = require('node-fetch')
const path = require('path')
const cors = require('cors')

const app = express()
const port = 3000

app.use(cors())  //---'requires a middleward function'---//
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/', express.static('./dist'))



app.get('/fetchTest/:text/', async (req, res) => {
    inputText = req.params.text
    lang = req.params.lang
    const apiKey = process.env.API_KEY
    try {
        let fetchedData = await fetch(`https://api.meaningcloud.com/sentiment-2.1?key=${apiKey}&lang=auto&url=http://${inputText}&model=general&dm=s&sdg=l&txtf=markup&of=json&uw=n&rt=n&egp=n`)
    .then(res => res.json())
    res.send(fetchedData)
    } catch {
        alert('you been caught!')
    }
}) 

app.listen(port, () => {
    console.log(`Server up and running on port: ${port}`)
})