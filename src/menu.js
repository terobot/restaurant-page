import item from './item'
import standardBurgerSrc from './assets/junior-reis-K9vGRD_47do-unsplash.jpg'
import greenBurgerSrc from './assets/junior-reis-XdNgE6NIHp4-unsplash.jpg'
import chiliBurgerSrc from './assets/junior-reis--Xr6MYJkZ8E-unsplash.jpg'
import friesSrc from './assets/junior-reis-XcpdGpiyj1c-unsplash.jpg'
import smashedPotatoSrc from './assets/junior-reis-bHIT0h_cqBI-unsplash.jpg'
import vegsSrc from './assets/junior-reis-MmnR8lxvpEs-unsplash.jpg'
import beerSrc from './assets/engin-akyurt-3ORoQEJY9LA-unsplash.jpg'
import colaSrc from './assets/giovanna-gomes-IHKR_A_THW0-unsplash.jpg'

const menu = () => {
    const attribution = 'Photo by <a href="https://unsplash.com/@juniorreisfoto?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Junior REIS</a> on <a href="https://unsplash.com/s/photos/burger?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>'
    const beerAtt = 'Photo by <a href="https://unsplash.com/@enginakyurt?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">engin akyurt</a> on <a href="https://unsplash.com/s/photos/beer?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>'
    const colaAtt = 'Photo by <a href="https://unsplash.com/@giisilveira?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Giovanna Gomes</a> on <a href="https://unsplash.com/s/photos/soda?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>'
    const menuEl = document.createElement('div')
    const containerEl = document.createElement('div')
    const mainsHeaderEl = document.createElement('h1')
    const sidesHeaderEl = document.createElement('h1')
    const drinksHeaderEl = document.createElement('h1')
    const standardBurgerEl = item('Standard burger', 'Bun, beef, cheese, pickles and mayo', '12€', standardBurgerSrc, 'Standard burger', attribution)
    const greenBurgerEl =  item('Green burger', 'Bun, vegan patty, cheese, lettuce, onion and mayo', '10€', greenBurgerSrc, 'Green burger', attribution)
    const chiliBurgerEl =  item('Chili burger', 'Bun, beef, cheese, chili and mayo', '15€', chiliBurgerSrc, 'Chili burger', attribution)
    const friesEl =  item('Fries', 'Potato fries, fried to perfection', '3€', friesSrc, 'Fries', attribution)
    const smashedPotatoEl =  item('Smashed potato', 'Loaded smashed potato', '5€', smashedPotatoSrc, 'Smashed potato', attribution)
    const vegsEl =  item('Vegs', 'Seasonal vegs fried', '5€', vegsSrc, 'Vegs', attribution)
    const beerEl =  item('Beer', 'Draft beer', '7€', beerSrc, 'beer', beerAtt)
    const colaEl =  item('Cola', 'Cola from draft', '3€', colaSrc, 'beer', colaAtt)
    mainsHeaderEl.innerHTML = 'Mains'
    sidesHeaderEl.innerHTML = 'Sides'
    drinksHeaderEl.innerHTML = 'Drinks'
    containerEl.classList.add('container')
    containerEl.append(mainsHeaderEl, standardBurgerEl, greenBurgerEl, chiliBurgerEl, sidesHeaderEl, friesEl, smashedPotatoEl, vegsEl, drinksHeaderEl, beerEl, colaEl)
    menuEl.classList.add('menu')
    menuEl.append(containerEl)

    return menuEl
}

export default menu



