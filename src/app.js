import header from './header'
import home from './home'
import footer from './footer'

const firstPageLoad = () => {
    document.body.prepend(header())
    const containerEl = document.getElementById('content')
    const homeEl = document.getElementById('home')
    containerEl.innerHTML = ''
    containerEl.append(home())
    containerEl.classList.add('content')
    homeEl.classList.add('clicked')
    document.body.append(footer())
}

export default firstPageLoad