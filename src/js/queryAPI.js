import { showClient } from "./showClient.js"

const queryAPI = async (txt, lang) => {
   console.log(txt, lang)
    const analysisData = await fetch(`http://localhost:3000/fetchTest/${txt}/${lang}`)
        .then(res => res.json())
        .then(analyzedText => {
            showClient(analyzedText)
            console.log(analyzedText)
    })
}

export { queryAPI }