import {shipInfo} from './shipElement'

export const shipList = (arr) => {
    const list = document.createElement('div')
    arr.forEach(el =>{
        list.appendChild(shipInfo(el))
    })

    return list
}