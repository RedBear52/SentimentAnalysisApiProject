import { fadeIn } from "./fadeIn"

const fadeOut = () => {
    setTimeout(fadeIn, '1000')

    const fadeEle = document.body
    fadeEle.style.opacity='0.1'
    fadeEle.style.transition='0.8s'
}

export { fadeOut }