const showClient = (data) => {
    // Here's the properly parsed data from the returned object
    // Need to craftily render it to the DOM now
    console.log(
        data.subjectivity,
        data.score_tag,
        data.sentence_list[0].text
    )
    const displayCard = document.getElementById('card')
    const dataPointList = document.getElementById('ul')
    // const dataList = displayCard.append(dataPointList)
    // dataList.innerHTML( 
    // `
    //     <li>${data.subjectivity}</li>
    //     <li>${data.score_tag}</li>
    //     <li>${data.sentence_list[0].text}</li>
    // `
    // ) 
    
    
    // need to iterate over a data object to dynamically add the list
    // SEE landing page NavBar functionality for guidance/inspiration

 }
 
 export { showClient }