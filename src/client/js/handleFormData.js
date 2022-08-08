import { validateInput } from "./validateInput.js"

const handleFormData = () => {
    const button = document.getElementById('btn')
    button.addEventListener('click', (e) => {
    e.preventDefault()
    let clientText = document.getElementById('client-text').value
        validateInput(clientText)
    })
}

export { handleFormData }