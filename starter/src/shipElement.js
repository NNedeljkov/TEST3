export const shipInfo = (ship) => {
    const shipContainer = document.createElement('div')

    // Назив брода
    // Тип брода
    // Да ли је активан
    // Слика

    const div1 = document.createElement('div')
    const shipname = document.createElement('div')
    shipname.textContent = ship.ship_name
    div1.appendChild(shipname)

    const div2 = document.createElement('div')
    const shipType = document.createElement('div')
    shipType.textContent = ship.ship_type
    div2.appendChild(shipType)

    const div3 = document.createElement('div')
    const isShipActive = document.createElement('div')
    isShipActive.textContent = ship.active
    div3.appendChild(isShipActive)

    const div4 = document.createElement('div')
    const shipImg = document.createElement('img')
    shipImg.src = ship.image
    shipImg.href = ship.url
    div4.appendChild(shipImg)

    shipContainer.append( div1, div2, div3, div4 )
    return shipContainer
}