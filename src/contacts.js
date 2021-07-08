const contacts = () => {
    const contactsEl = document.createElement('div')
    const containerEl = document.createElement('div')
    const contactsHeaderEl = document.createElement('h1')
    const contactsTextEl = document.createElement('p')
    const hoursHeaderEl = document.createElement('h1')
    const hoursTextEl = document.createElement('p')
    containerEl.classList.add('container')
    contactsHeaderEl.innerHTML = 'Contacts'
    contactsTextEl.innerHTML = 'Phone: 123-456-789, Email: good@food.inc'
    hoursHeaderEl.innerHTML = 'Hours'
    hoursTextEl.innerHTML = 'Tue-Sat 10:00 - 02:00, Mon and Sun closed.'
    containerEl.append(contactsHeaderEl, contactsTextEl, hoursHeaderEl, hoursTextEl)
    contactsEl.classList.add('contacts')
    contactsEl.append(containerEl)

    return contactsEl
}

export default contacts