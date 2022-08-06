import { validateInput } from "./validateInput.js"
// import { queryAPI } from "./queryAPI.js"

const handleFormData = () => {
    const button = document.getElementById('btn')
    button.addEventListener('click', (e) => {
    e.preventDefault()
    let language = document.getElementById('lang').value
    let clientText = document.getElementById('client-text').value

    console.log(clientText)
    // console.log("::: Form Submitted :::")

    // if(validateInput(clientText)) {
        validateInput(clientText, language)
        // } else {
        //     alert('Please enter a valid url')
        // }
    })
}

export { handleFormData }