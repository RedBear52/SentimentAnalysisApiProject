const showClient = (data) => {
    if (data.status.credits === '0') {
        const listDisplay = document.getElementById('list')
        listDisplay.innerHTML =
        `
        <p>An error ocurred while attempting to analyze the sentiment of the requested site : 
        <strong>Please enter an alternative request.</strong></p>
        `
    } else {
        const listDisplay = document.getElementById('list').innerHTML=`
        <h3>Article Analysis Data:</h3>
        <li>Subjectivity: ${data.subjectivity}</li>
        <li>Emotional Tone: ${data.score_tag}</li>
        <li>Sample Text Snippet: ${data.sentence_list[0].text}</li>`
    }
 }
 
 export { showClient }