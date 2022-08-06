import { queryAPI } from "./queryAPI"

const validateInput = (txt, lang) => {
    const regexp = /[a-zA-Z0-9]{6,50}/
    // if(regexp.test(txt)) {
        console.log(regexp)
        queryAPI(txt, lang)
    // } else {
    //     return 'false'
    // }
}

export { validateInput }