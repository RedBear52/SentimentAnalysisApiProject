require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
// const fetch = require('fetch')
const path = require('path')
const cors = require('cors')


const app = express()
console.log(app)
const port = 3000

// app.use('cors')  //---'requires a middleward function'---//
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/', express.static('./public'))

// app.get('/', (req, res) => {
//     res.sendFile('/Users/ryanspearman/Desktop/testServer/public/index.html')
// }) 

app.listen(port, () => {
    console.log(`Server up and running on port: ${port}`)
})