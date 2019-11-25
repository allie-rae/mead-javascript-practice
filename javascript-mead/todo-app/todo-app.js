const todos = [
    {
        text: 'Take a bath',
        completed: true
    },
    {
        text: 'Go on a walk',
        completed: true
    },
    {
        text: 'Finish this course',
        completed: false
    },
    {
        text: 'Complete code challenges',
        completed: false
    },
    {
        text: 'Sing a song',
        completed: false
    }
]

const filters = {
    searchText: ''
}

const renderTodos = function (todos, filters) {
    const filteredTodos = todos.filter(function (todo) {
        return todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
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
    renderTodos(todos, filters)
    e.target.elements.addTodo.value = ''
})
