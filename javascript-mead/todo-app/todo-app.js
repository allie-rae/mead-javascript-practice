let todos = []

const todosJSON = localStorage.getItem('todos')

if (todosJSON !== null) {
    todos = JSON.parse(todosJSON)
}

const filters = {
    searchText: '',
    hideCompleted: false
}

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

    const summary = document.createElement('h2')
    summary.textContent = `You have ${todosRemaining.length} things left to do.`
    document.querySelector('#todos').appendChild(summary)

    filteredTodos.forEach(function (todo) {
        const todoElement = document.createElement('p')
        todoElement.textContent = todo.text
        document.querySelector('#todos').appendChild(todoElement)
    })
}

renderTodos(todos, filters)


document.querySelector('#todoSearch').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderTodos(todos, filters)
})

document.querySelector('#addTodoForm').addEventListener('submit', function (e) {
    e.preventDefault()
    todos.push({
        text: e.target.elements.addTodo.value,
        completed: false
    })
    localStorage.setItem('todos', JSON.stringify(todos))
    renderTodos(todos, filters)
    e.target.elements.addTodo.value = ''
})

document.querySelector('#hideCompletedTodos').addEventListener('change', function (e) {
    filters.hideCompleted = e.target.checked
    renderTodos(todos, filters)
})