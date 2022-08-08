const showClient = (data) => {
    console.log(data)
    if (data.status.credits === '0') {
        const randomizer = Math.floor(Math.random() * 9) + 1
        const colorPalette = ["red", "blue", "green", "yellow", "black", "purple", "pink", "aqua", "gold", "maroon"]
        const listDisplay = document.getElementById('list')
        listDisplay.style.color = colorPalette[randomizer]
        listDisplay.innerHTML =
        `
        <h2>Error</h2>
        `
    } else {
        const listDisplay = document.getElementById('list').innerHTML=`
        <h1>Article Analysis Data:</h1>
        <li>Subjectivity: ${data.subjectivity}</li>
        <li>Emotional Tone: ${data.score_tag}</li>
        <li>Sample Text Snippet: ${data.sentence_list[0].text}</li>`
    }
    
 }
 
 export { showClient }