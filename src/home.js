const home = () => {
    const homeEl = document.createElement('div')
    const containerEl = document.createElement('div')
    const aboutHeaderEl = document.createElement('h1')
    const aboutTextEl = document.createElement('p')
    const historyHeaderEl = document.createElement('h1')
    const historyTextEl = document.createElement('p')
    containerEl.classList.add('container')
    aboutHeaderEl.innerHTML = 'About us'
    aboutTextEl.innerHTML = 'Good food for hungry people. At Good Food Inc, we wish to offer good food to you no matter who you are and where you come from with an innovative gastronomic take on traditional cooking methods, fine produce and the legacy of our shared food heritage. Moreover, we regard it as a personal challenge to help bring about a revival of good food and let its distinctive flavours and particular regional character brighten up the world.'
    historyHeaderEl.innerHTML = 'History'
    historyTextEl.innerHTML = 'Good Food Inc restaurant began on May 14th, 1988 in the city of Eagle Bay. Focusing on the goals of “Creativity, Quality, Healthy, and Tradition” the company is family operation making each dish in our own kitchens from scratch. Good Food Inc has three generations of family member working together to fulfill the idea “Honor the Community, Quality Comes First”. Through creativity and curiousity, Good Food Inc began building its brand around the idea of delicious and authentic good food.'
    containerEl.append(aboutHeaderEl, aboutTextEl, historyHeaderEl, historyTextEl)
    homeEl.classList.add('home')
    homeEl.append(containerEl)

    return homeEl
}

export default home