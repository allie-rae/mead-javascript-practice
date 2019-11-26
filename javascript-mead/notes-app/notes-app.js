const notes = [
    {
        title: 'Colorado',
        body: 'So many cute animals!'
    },
    {
        title: 'New Orleans',
        body: 'Had a bad time tbh'
    },
    {
        title: 'Indiana',
        body: 'Cute boyfriend shows me around his past'
    },
    {
        title: 'Portland',
        body: 'So cute! Giant bookstore. GF fish & chips.'
    }
]

// localStorage.setItem('location', 'Seattle') - puts data in storage

// console.log(localStorage.getItem('location')) - reads data

// localStorage.removeItem('location') - removes specific data

// localstorage.clear() - removes ALL saved data

// const user = {
//     name: 'Allie',
//     age: 26
// }

// const userJSON = JSON.stringify(user)
// console.log(userJSON)
// localStorage.setItem('user', userJSON)

const userJSON = localStorage.getItem('user')
const user = JSON.parse(userJSON)
console.log(`${user.name} is ${user.age}`)

const filters = {
    searchText: ''
}

const renderNotes = function (notes, filters) {
    const filteredNotes = notes.filter(function (note) {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })

document.querySelector('#notes').innerHTML = ''

    filteredNotes.forEach(function (note) {
        const noteElement = document.createElement('p')
        noteElement.textContent = note.title
        document.querySelector('#notes').appendChild(noteElement)
    })
}

renderNotes(notes, filters)

document.querySelector('#addNote').addEventListener('click', function () {
    console.log("Click")
})

document.querySelector('#noteInput').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})

document.querySelector('#filterBy').addEventListener('change', function (e) {
    console.log(e.target.value)
})