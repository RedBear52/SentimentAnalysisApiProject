const testModule = () => {
    const button = document.getElementById('btn')
    button.addEventListener('click', (e) => {
        e.preventDefault()
    console.log('Holy Shit, I sucessfully imported and exported a module!')
    })
}

export { testModule }
