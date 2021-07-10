import item from './item'
import standardBurgerSrc from './assets/junior-reis-K9vGRD_47do-unsplash.jpg'
import greenBurgerSrc from './assets/junior-reis-XdNgE6NIHp4-unsplash.jpg'

const menu = () => {
    const attribution = 'Photo by <a href="https://unsplash.com/@juniorreisfoto?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Junior REIS</a> on <a href="https://unsplash.com/s/photos/burger?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>'
    const menuEl = document.createElement('div')
    const containerEl = document.createElement('div')
    const standardBurgerEl = item('Standard burger', 'Bun, beef, cheese, pickles and mayo', '12€', standardBurgerSrc, 'Standard burger', attribution)
    const greenBurgerEl =  item('Green burger', 'Bun, vegan patty, cheese, lettuce, onion and mayo', '10€', greenBurgerSrc, 'Green burger', attribution)
    containerEl.classList.add('container')
    containerEl.append(standardBurgerEl, greenBurgerEl)
    menuEl.classList.add('menu')
    menuEl.append(containerEl)

    return menuEl
}

export default menu



