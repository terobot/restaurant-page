import header from './header'
import home from './home'

const firstPageLoad = () => {
    document.body.prepend(header())
    const containerEl = document.getElementById('content')
    const homeEl = document.getElementById('home')
    containerEl.innerHTML = ''
    containerEl.append(home())
    containerEl.classList.add('content')
    homeEl.classList.add('clicked')
}

export default firstPageLoad