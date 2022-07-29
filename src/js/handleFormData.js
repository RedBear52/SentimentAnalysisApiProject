import { queryAPI } from "./queryAPI.js"

const handleFormData = () => {
    const button = document.getElementById('btn')
    button.addEventListener('click', (e) => {
    e.preventDefault()
    let language = document.getElementById('lang').value
    let clientText = document.getElementById('client-text').value
    // const key = 'd632a4eb2923650457c2e8784a23830c'
    return queryAPI(clientText, language)
    })
}

export { handleFormData }