
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

// Generate DOM structure for todo

const generateTodoDOM = function (todo) {
    const todoElement = document.createElement('div')
    const todoText = document.createElement('span')
    const todoCheckbox = document.createElement('input')
    todoCheckbox.setAttribute('type', 'checkbox')

    todoText.textContent = todo.text

    todoElement.appendChild(todoCheckbox)
    todoElement.appendChild(todoText)

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