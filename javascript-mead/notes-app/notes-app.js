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
    const id = uuidv4()
    notes.push({
        id: id,
        title: '',
        body: ''
    })
    saveNotes(notes)
    location.assign(`/edit.html#${id}`)
})

document.querySelector('#noteInput').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})

document.querySelector('#filterBy').addEventListener('change', function (e) {
    console.log(e.target.value)
})

window.addEventListener('storage', function (e) {
    notes = JSON.parse(e.newValue)
    renderNotes(notes, filters)
})

const now = new Date()
console.log(now.toString())

console.log(`Year: ${now.getFullYear()}`)
console.log(`Month: ${now.getMonth()}`)
console.log(`Day: ${now.getDate()}`)
console.log(`Hour: ${now.getHours()}`)
console.log(`Minutes: ${now.getMinutes()}`)
console.log(`Seconds: ${now.getSeconds()}`)

const past1 = new Date('February 2 1993 1:25:51')
const past2 = new Date('January 2 1987 3:40:40')

timestamp1 = past1.getTime()
timestamp2 = past2.getTime()

console.log("timestamp1", timestamp1)
console.log("timestamp2", timestamp2)

const whichIsSmaller = function (time1, time2) {
    if (time1 < time2) {
        return time1.toString()
    } else {
        return time2.toString()
    }
}

console.log("whichIsSmaller", whichIsSmaller(timestamp1, timestamp2))

