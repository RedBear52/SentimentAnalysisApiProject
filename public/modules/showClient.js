const showClient = (data) => {
    // Here's the properly parsed data from the returned object
    // Need to craftily render it to the DOM now
    console.log(
        data.subjectivity,
        data.score_tag,
        data.sentence_list[0].text
    )
 }
 
 export { showClient }