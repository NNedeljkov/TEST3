import { getAllShips, getSpaceXInfo } from './service'
import { shipList } from './shipList'
const application = document.querySelector('#app')

// console.log(getAllShips().then(res => {
//     console.log(res);
// }));
// console.log(getSpaceXInfo().then(res => {
//     console.log(res);
// }));
const head = document.querySelector('#header')
head.textContent = getSpaceXInfo().then(res => {
    const headDiv = document.createElement('div')
    headDiv.textContent = res.data.name + ' ' + res.data.founder + ' ' + res.data.founded
    head.appendChild(headDiv)
})
const select = document.createElement('select')
const option1 = document.createElement('option')
option1.textContent = 'aktivni'
option1.value = 1
const option2 = document.createElement('option')
option2.textContent = 'neaktivni'
option2.value = 2
// select.addEventListener('change', (e) => {
//     if(select.value == 1){
//         getAllShips
//     }
// })
select.append(option1, option2)
application.appendChild(select)
getAllShips().then(res =>[
    application.appendChild(shipList(res.data))
])

