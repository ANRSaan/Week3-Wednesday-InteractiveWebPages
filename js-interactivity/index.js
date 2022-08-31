console.log('hello world')

let message = document.querySelector('#message')

const addMovie = (event) => {
    event.preventDefault()
    let inputField = document.querySelector('input')
    let movie = document.createElement('li')
    let movieTitle = document.createElement('span')

    movieTitle.textContent = inputField.value
    movieTitle.addEventListener('click', crossOffMovie)

    movie.appendChild(movieTitle)

    let deleteBtn = document.createElement('button')
    deleteBtn.textContent = 'X';
    deleteBtn.addEventListener('click', deleteMovie)
    movie.appendChild(deleteBtn)

    document.querySelector('ul').appendChild(movie)
    
}



const revealMessage = ()  => {
    message.classList.remove('hide')
    setTimeout(() => message.classList.add('hide'), 1000)
}

const deleteMovie = (event) => {
    event.target.parentNode.remove()
    console.log(event.target.parentNode)
    message.textContent = `${event.target.previousSibling.textContent} deleted!`
    revealMessage()
}

const crossOffMovie = event => {
    event.target.classList.toggle('checked')
    if (event.target.classList.contains('checked')) {
        message.textContent = `${event.target.textContent} watched!`
    } else {
        message.textContent = `${event.target.textContent} added back!`

    }
    revealMessage()
}

document.querySelector("form").addEventListener('submit', addMovie)