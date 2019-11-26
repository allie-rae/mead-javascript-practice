// Check for existing saved data
// Read existing notes from LocalStorage
const getSavedNotes = function () {
    const notesJSON = localStorage.getItem('notes')

    if (notesJSON !== null) {
        return JSON.parse(notesJSON)
    } else {
        return []
    }
}

// Generate the DOM structure for a note

const generateNoteDOM = function (note) {
    const noteElement = document.createElement('p')

    if (note.title.length > 0) {
        noteElement.textContent = note.title
    } else {
        noteElement.textContent = "Untitled note"
    }
    return noteElement
}


// Render application notes 

const renderNotes = function (notes, filters) {
    const filteredNotes = notes.filter(function (note) {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    document.querySelector('#notes').innerHTML = ''

    filteredNotes.forEach(function (note) {
        const noteElement = generateNoteDOM(note)
        document.querySelector('#notes').appendChild(noteElement)
    })
}