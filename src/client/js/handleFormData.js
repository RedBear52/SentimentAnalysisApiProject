import { queryAPI } from "./queryAPI.js"

const handleFormData = () => {
    const button = document.getElementById('btn')
    button.addEventListener('click', (e) => {
    e.preventDefault()
    let language = document.getElementById('lang').value
    let clientText = document.getElementById('client-text').value
    return queryAPI(clientText, language)
    })
}

export { handleFormData }