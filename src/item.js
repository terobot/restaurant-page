const item = (name, text, price, image) => {
    const itemEl = document.createElement('div')
    const nameEl = document.createElement('h2')
    const textEl = document.createElement('p')
    const priceEl = document.createElement('h3')
    const imageEl = document.createElement('img')
    nameEl.innerHTML = name
    textEl.innerHTML = text
    priceEl.innerHTML = price
    imageEl.setAttribute('src', image)
    itemEl.append(nameEl, textEl, priceEl, imageEl)
    itemEl.classList.add('item')

    return itemEl
}

export default item