const menu = () => {
    const menuEl = document.createElement('div')
    const containerEl = document.createElement('div')
    const aboutHeaderEl = document.createElement('h1')
    const aboutTextEl = document.createElement('p')
    const historyHeaderEl = document.createElement('h1')
    const historyTextEl = document.createElement('p')
    containerEl.classList.add('container')
    aboutHeaderEl.innerHTML = 'About us'
    aboutTextEl.innerHTML = 'Good food for hungry people. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    historyHeaderEl.innerHTML = 'History'
    historyTextEl.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    containerEl.append(aboutHeaderEl, aboutTextEl, historyHeaderEl, historyTextEl)
    menuEl.classList.add('menu')
    menuEl.append(containerEl)

    return menuEl
}

export default menu