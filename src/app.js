import header from './header'
import home from './home'

const firstPageLoad = () => {
    document.body.prepend(header())
    const containerEl = document.getElementById('content')
    containerEl.innerHTML = ''
    containerEl.append(home())
}

export default firstPageLoad