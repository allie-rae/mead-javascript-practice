let notes = getSavedNotes()

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

// const userJSON = localStorage.getItem('user')
// const user = JSON.parse(userJSON)
// console.log(`${user.name} is ${user.age}`)



const filters = {
    searchText: ''
}

renderNotes(notes, filters)

document.querySelector('#addNote').addEventListener('click', function (e) {
    notes.push({
        id: uuidv4(),
        title: '',
        body: ''
    })
    localStorage.setItem('notes', JSON.stringify(notes))
    renderNotes(notes, filters)
})

document.querySelector('#noteInput').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})

document.querySelector('#filterBy').addEventListener('change', function (e) {
    console.log(e.target.value)
})