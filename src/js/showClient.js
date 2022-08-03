const showClient = (data) => {
    // Here's the properly parsed data from the returned object
    // Need to craftily render it to the DOM now
    console.log(
        data.subjectivity,
        data.score_tag,
        data.sentence_list[0].text
    )
    const listDisplay = document.getElementById('list')
    const polarity = document.getElementById('polarity').innerHTML= `
    <li>Subjectivity: ${data.subjectivity}</li>
    <li>Emotional Tone: ${data.score_tag}</li>
    <li>Sample Text Snippet: ${data.sentence_list[0].text}</li>
`
    const subjectivity = document.getElementById('subjectivity')
    const exampleText = document.getElementById('example-text')
    // need to iterate over a data object to dynamically add the list
    // SEE landing page NavBar functionality for guidance/inspiration
 }
 
 export { showClient }