const name = document.getElementById('name')
const email = document.getElementById('email')
const title = document.getElementById('title')
const message = document.getElementById('message')
const errorElement = document.getElementById('error')

FormData.addEventListener('submit', (e) => {
    let messages = []
    if (name.length <=4) {
        messages.push('At least 4 characters as a name')
    }

    if (message.length >=20) {
        messages.push('At least 20 characters as a message')
        e.preventDefault()
        errorElement.innerText = messages.join(',')
    }

})