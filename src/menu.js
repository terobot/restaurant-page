import item from './item'

const menu = () => {
    const menuEl = document.createElement('div')
    const containerEl = document.createElement('div')
    const standardBurgerEl = item('Standard burger', 'Bun, beef, cheese, pickles and mayo', '12€', 'https://images.unsplash.com/photo-1609167921669-4561a5b64e28?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fGJ1cmdlcnxlbnwwfHwwfGJsYWNrfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60')
    const greenBurgerEl =  item('Green burger', 'Bun, vegan patty, cheese, lettuce, onion and mayo', '10€', 'https://images.unsplash.com/photo-1609167921178-e295a98f808f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fGJ1cmdlcnxlbnwwfHwwfGJsYWNrfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60')
    containerEl.classList.add('container')
    containerEl.append(standardBurgerEl, greenBurgerEl)
    menuEl.classList.add('menu')
    menuEl.append(containerEl)

    return menuEl
}

export default menu



