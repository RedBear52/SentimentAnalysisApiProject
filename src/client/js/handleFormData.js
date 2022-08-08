import { validateInput } from "./validateInput.js"
import { fadeOut } from "./fadeOut"

const handleFormData = () => {
    const button = document.getElementById('btn')
    button.addEventListener('click', (e) => {
    e.preventDefault()

    fadeOut()

    let clientText = document.getElementById('client-text').value
    validateInput(clientText)
    })
}

export { handleFormData }