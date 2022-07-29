require('dotenv').config()
console.log(process.env)
// const mockAPIResponse = require('mockData.js')
const express = require('express')
const bodyParser = require('body-parser')
const fetch = require('node-fetch')
const path = require('path')
const cors = require('cors')
const { resolveSoa } = require('dns')


const app = express()
console.log(app)
const port = 3000

app.use(cors())  //---'requires a middleward function'---//
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/', express.static('./src'))



app.get('/fetchTest/:text/:lang/', async (req, res) => {
    inputText = req.params.text
    lang = req.params.lang
    const apiKey = process.env.API_KEY
    // const apiKey = 'd632a4eb2923650457c2e8784a23830c'
    
    let fetchedData = await fetch(`https://api.meaningcloud.com/sentiment-2.1?key=${apiKey}&lang=${lang}&txt=${inputText}&model=general&dm=s&sdg=l&txtf=plain&of=json&uw=n&rt=n&egp=n`)
    // let fetchedData = await fetch(`https://api.meaningcloud.com/sentiment-2.1?key=d632a4eb2923650457c2e8784a23830c&lang=en&txt=Afterreceivingwaexplor&model=general&dm=s&sdg=l&txtf=plain&of=json&uw=n&rt=n&egp=n`)
    .then(res => res.json())
    res.send(fetchedData)
    // let baseUrl = `https://api.meaningcloud.com/sentiment-2.1?key=${apiKey}&lang=${lang}&txt=${inputText}&model=general&dm=s&sdg=l&txtf=plain&of=json&uw=n&rt=n&egp=n`

}) 

app.listen(port, () => {
    console.log(`Server up and running on port: ${port}`)
})





 // res.send({"this is an object": "objectThing"})


    // console.log(data)
    // const options = {
    //   method: 'POST',
    //   headers: {
    //     Accept: 'application/json'
    //   }
    // }
