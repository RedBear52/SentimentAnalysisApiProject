import { showClient } from "./showClient.js"

const queryAPI = async (txt) => {
    try {
        console.log(txt)
        const analysisData = await fetch(`http://localhost:3000/fetchTest/${txt}/`)
            .then(res => res.json())
            .then(analyzedText => {
                showClient(analyzedText)
                console.log(analyzedText)
        })
    } catch {
        document.getElementById('client-text').innerText=`something went wrong with the server request`
   
    }
}

export { queryAPI }