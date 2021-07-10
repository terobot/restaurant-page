const item = (name, text, price, image, imageAlt, attribution) => {
    const itemEl = document.createElement('div')
    const nameEl = document.createElement('h2')
    const textEl = document.createElement('p')
    const priceEl = document.createElement('h3')
    const imageEl = document.createElement('img')
    const attributionEl = document.createElement('p')
    nameEl.innerHTML = name
    textEl.innerHTML = text
    priceEl.innerHTML = price
    imageEl.setAttribute('src', image)
    imageEl.setAttribute('alt', imageAlt)
    attributionEl.innerHTML = attribution
    itemEl.append(nameEl, textEl, priceEl, imageEl, attributionEl)
    itemEl.classList.add('item')

    return itemEl
}

export default item