import './style.css'

const footer = () => {
    const footerEl = document.createElement('div')
    footerEl.innerHTML = 'Street 123, City, Country'
    footerEl.classList.add('footer')

    return footerEl
}

export default footer