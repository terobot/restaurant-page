import header from './header'
import home from './home'

const firstPageLoad = () => {
    document.body.prepend(header())
    const containerEl = document.getElementById('content')
    containerEl.innerHTML = ''
    containerEl.append(home())
    containerEl.classList.add('content')
}

export default firstPageLoad