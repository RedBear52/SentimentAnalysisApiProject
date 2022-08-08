import { queryAPI } from "./queryAPI"

const validateInput = (txt) => {
    const regexp = /^(((?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/
    if(regexp.test(txt) === true) {
        queryAPI(txt)
    } else {
        console.log(`Error: ${txt} did not pass validation`)
        alert(`Invalid url format. Try something like this:
                      www.[website-name].com`)
    }
}

export { validateInput }