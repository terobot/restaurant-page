const header = () => {
    const headerEl = document.createElement('header')
    const navEl = document.createElement('nav')
    const listEl = document.createElement('ul')
    const homeEl = document.createElement('li')
    const menuEl = document.createElement('li')
    const contactEl = document.createElement('li')

    homeEl.innerHTML = 'Home'
    menuEl.innerHTML = 'Menu'
    contactEl.innerHTML = 'Contact'

    listEl.append(homeEl, menuEl, contactEl)
    navEl.append(listEl)
    headerEl.append(navEl)

    return headerEl
}

export default header