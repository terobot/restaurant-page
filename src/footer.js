import './style.css'

const footer = () => {
    const footerEl = document.createElement('div')
    footerEl.innerHTML = 'Placeholder text for footer'
    footerEl.classList.add('footer')

    return footerEl
}

export default footer