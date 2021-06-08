import home from './home'
import menu from './menu'
import contacts from './contacts'
import './style.css'

const header = () => {
    const headerEl = document.createElement('header')
    const navEl = document.createElement('nav')
    const listEl = document.createElement('ul')
    const homeEl = document.createElement('li')
    const menuEl = document.createElement('li')
    const contactsEl = document.createElement('li')

    homeEl.innerHTML = 'Home'
    homeEl.setAttribute('id', 'home')
    homeEl.addEventListener('click', () => {
        const containerEl = document.getElementById('content')
        containerEl.innerHTML = ''
        containerEl.append(home())
    })
    menuEl.innerHTML = 'Menu'
    menuEl.setAttribute('id', 'menu')
    menuEl.addEventListener('click', () => {
        const containerEl = document.getElementById('content')
        containerEl.innerHTML = ''
        containerEl.append(menu())
    })
    contactsEl.innerHTML = 'Contacts'
    contactsEl.setAttribute('id', 'contacts')
    contactsEl.addEventListener('click', () => {
        const containerEl = document.getElementById('content')
        containerEl.innerHTML = ''
        containerEl.append(contacts())
    })

    listEl.append(homeEl, menuEl, contactsEl)
    navEl.append(listEl)
    navEl.classList.add('navbar')
    headerEl.append(navEl)

    return headerEl
}

export default header