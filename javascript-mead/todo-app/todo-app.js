let todos = getSavedTodos()

const filters = {
    searchText: '',
    hideCompleted: false
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
    saveTodo()
    renderTodos(todos, filters)
    e.target.elements.addTodo.value = ''
})

document.querySelector('#hideCompletedTodos').addEventListener('change', function (e) {
    filters.hideCompleted = e.target.checked
    renderTodos(todos, filters)
})