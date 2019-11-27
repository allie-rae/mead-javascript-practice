
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
    const todoElement = document.createElement('p')
    todoElement.textContent = todo.text
    return todoElement
}

// Generate DOM structure for summary

const generalSummaryDOM = function (todosRemaining) {
    const summary = document.createElement('h2')
    summary.textContent = `You have ${todosRemaining.length} things left to do.`
    return document.querySelector('#todos').appendChild(summary)
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

    generalSummaryDOM(todosRemaining)
    
    filteredTodos.forEach(function (todo) {
        const todoElement = generateTodoDOM(todo)
        document.querySelector('#todos').appendChild(todoElement)
    })
}