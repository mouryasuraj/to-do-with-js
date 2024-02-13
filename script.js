const toDoListContainer = document.querySelector('.todo-list-container')

// form
const form = document.querySelector('form')
const input = document.querySelector('#input')
// TodoListContainer
form.addEventListener('submit', (e) => {
    e.preventDefault()
    addTodo()

})

// Add todo function
function addTodo() {
    if (input.value === '') return alert('Enter the task')

    // div
    const createTodo = document.createElement('div');
    createTodo.setAttribute('class', 'todo')
    createTodo.setAttribute('data-id', `${input.value}`)
    // input
    const inputField = document.createElement('input')
    inputField.setAttribute('type', 'text')
    inputField.setAttribute('value', `${input.value}`)
    inputField.setAttribute('readonly', '')
    // Completed
    const completedBtn = document.createElement('button')
    completedBtn.innerHTML = 'Completed'
    completedBtn.setAttribute('class', 'completed')
    // Edit
    const editBtn = document.createElement('button')
    editBtn.innerHTML = 'Edit'
    editBtn.setAttribute('class', 'edit')
    // delete
    const deleteBtn = document.createElement('button')
    deleteBtn.innerHTML = 'Delete'
    deleteBtn.setAttribute('class', 'delete')

    // addEventlistener on completedBtn
    completedBtn.addEventListener('click', () => {
        if (inputField.style.textDecoration === 'line-through') {
            inputField.style.textDecoration = 'none'
            createTodo.style.backgroundColor = ''
        } else {
            inputField.style.textDecoration = 'line-through'
            createTodo.style.backgroundColor = 'green'
        }
    })

    // addEventlistener on editButton
    editBtn.addEventListener('click', () => {
        if (inputField.hasAttribute('readonly')) {
            inputField.removeAttribute('readonly')
            editBtn.textContent = 'Save'
            editBtn.style.backgroundColor = '#00ff00'
        } else {
            inputField.setAttribute('readonly', '')
            editBtn.textContent = 'Edit'
            editBtn.style.backgroundColor = ''
        }
    })

    // addEventlistener on deleteButton
    deleteBtn.addEventListener('click', () => {
        toDoListContainer.removeChild(createTodo)
    })

    createTodo.appendChild(inputField)
    createTodo.appendChild(completedBtn)
    createTodo.appendChild(editBtn)
    createTodo.appendChild(deleteBtn)
    toDoListContainer.appendChild(createTodo)
    input.value = '';
}
