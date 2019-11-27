
// Read existing todos from localstorage

const getSavedTodos = function () {
    const todosJSON = localStorage.getItem('todos')

    if (todosJSON !== null) {
        return JSON.parse(todosJSON)
    } else {
        return []
    }
}

// Save todo to localStorage

const saveTodo = function () {
    return localStorage.setItem('todos', JSON.stringify(todos))
}

// Remove todo 

const removeTodo = function (id) {
    const todoIndex = todos.findIndex(function (todo) {
        return todo.id === id
    })

    if (todoIndex > -1) {
        todos.splice(todoIndex, 1)
    }
}

// Generate DOM structure for todo

const generateTodoDOM = function (todo) {
    // Setup wrapper
    const todoElement = document.createElement('div')
    const todoCheckbox = document.createElement('input')
    const todoText = document.createElement('span')
    const removeButton = document.createElement('button')

    // Setup checkbox
    todoCheckbox.setAttribute('type', 'checkbox')
    todoElement.appendChild(todoCheckbox)

    // Setup todo text
    todoText.textContent = todo.text
    todoElement.appendChild(todoText)

    // Setup remove button 
    removeButton.textContent = 'x'
    todoElement.appendChild(removeButton)
    removeButton.addEventListener('click', function () {
        removeTodo(todo.id)
        saveTodo(todos)
        renderTodos(todos, filters)
    })

    return todoElement
}

// Generate DOM structure for summary

const generalSummaryDOM = function (todosRemaining) {
    const summary = document.createElement('h2')
    summary.textContent = `You have ${todosRemaining.length} things left to do.`
    return summary
}


// Render list of todos

const renderTodos = function (todos, filters) {
    const filteredTodos = todos.filter(function (todo) {
        const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
        const hideCompletedMatch = !filters.hideCompleted || !todo.completed

        return searchTextMatch && hideCompletedMatch
    })

    const todosRemaining = filteredTodos.filter(function (todo) {
        return !todo.completed
    })

    document.querySelector('#todos').innerHTML = ''
    document.querySelector('#todos').appendChild(generalSummaryDOM(todosRemaining))

    generalSummaryDOM(todosRemaining)

    filteredTodos.forEach(function (todo) {
        document.querySelector('#todos').appendChild(generateTodoDOM(todo))
    })
}