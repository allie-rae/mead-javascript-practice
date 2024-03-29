const titleElement = document.querySelector('#note-title')
const bodyElement = document.querySelector('#note-body')
const removeElement = document.querySelector('#remove-note')
const noteId = location.hash.substring(1)
let notes = getSavedNotes()
let note = notes.find(function (note) {
    return note.id === noteId
})

if (note === undefined) {
    location.assign('/index.html')
}

titleElement.value = note.title
bodyElement.value = note.body

// Setup input event for title

titleElement.addEventListener('input', function (e) {
    note.title = e.target.value
    saveNotes(notes)
})

// Setup input event for body

bodyElement.addEventListener('input', function (e) {
    note.body = e.target.value
    saveNotes(notes)
})

// Remove note button 

removeElement.addEventListener('click', function (e) {
    removeNote(note.id)
    saveNotes(notes)
    location.assign('/index.html')
})

// Keeps display the same with multiple tabs open

window.addEventListener('storage', function (e) {
    if (e.key === 'notes') {
        notes = JSON.parse(e.newValue)
        note = notes.find(function (note) {
            return note.id === noteId
        })

        if (note === undefined) {
            location.assign('./index.html')
        }

        titleElement.value = note.title
        bodyElement.value = note.body
    }
})