const queryAPI = async (txt, lang, key) => {
   console.log(txt, lang, key)
    const analysisData = await fetch(`http://localhost:3000/fetchTest/${txt}/${lang}/${key}`)
        .then(res => res.json())
        .then(analyzedText => {
            console.log(analyzedText)
        })
}

export { queryAPI }