import './style.css'

const footer = () => {
    const attribution = 'Background photo by <a href="https://unsplash.com/@amseaman?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Andrew Seaman</a> on <a href="https://unsplash.com/s/photos/restaurant?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>'
    const footerEl = document.createElement('div')
    const footerTextEl = document.createElement('p')
    const attributionEl = document.createElement('p')
    footerTextEl.innerHTML = 'Street 123, City, Country'
    attributionEl.innerHTML = attribution
    footerEl.append(footerTextEl, attributionEl)
    footerEl.classList.add('footer')

    return footerEl
}

export default footer