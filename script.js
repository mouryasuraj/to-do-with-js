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
        toggleCompletedBtn(inputField, createTodo)
        saveData()

    })

    // addEventlistener on editButton
    editBtn.addEventListener('click', () => {
        toggleEditBtn(inputField, editBtn)
        saveData()
    })

    // addEventlistener on deleteButton
    deleteBtn.addEventListener('click', () => {
        toDoListContainer.removeChild(createTodo)
        saveData()
    })

    createTodo.appendChild(inputField)
    createTodo.appendChild(completedBtn)
    createTodo.appendChild(editBtn)
    createTodo.appendChild(deleteBtn)
    toDoListContainer.appendChild(createTodo)
    input.value = '';
    saveData()
}

function toggleCompletedBtn(inputField, createTodo) {
    if (inputField.style.textDecoration === 'line-through') {
        inputField.style.textDecoration = 'none'
        createTodo.style.backgroundColor = ''
    } else {
        inputField.style.textDecoration = 'line-through'
        createTodo.style.backgroundColor = 'green'
    }
}

function toggleEditBtn(inputField, editBtn) {
    if (inputField.hasAttribute('readonly')) {
        inputField.removeAttribute('readonly')
        editBtn.textContent = 'Save'
        editBtn.style.backgroundColor = '#00ff00'
    } else {
        inputField.setAttribute('value', `${inputField.value}`)
        inputField.setAttribute('readonly', '')
        editBtn.textContent = 'Edit'
        editBtn.style.backgroundColor = ''
    }
}


function saveData() {
    localStorage.setItem('data', toDoListContainer.innerHTML);
}

function showTask() {
    const getItem = localStorage.getItem('data')
    if (getItem) {
        toDoListContainer.innerHTML = getItem

        const todoItems = document.querySelectorAll('.todo');
        todoItems.forEach((todoItem) => {
            const completedBtn = todoItem.querySelector('.completed')
            const editBtn = todoItem.querySelector('.edit')
            const deleteBtn = todoItem.querySelector('.delete')
            const inputField = todoItem.querySelector('input')

            completedBtn.addEventListener('click', () => {
                toggleCompletedBtn(inputField, todoItem);
                saveData()
            })

            editBtn.addEventListener('click', () => {
                toggleEditBtn(inputField, editBtn)
                saveData()
            })

            deleteBtn.addEventListener('click', () => {
                toDoListContainer.removeChild(todoItem)
                saveData()
            })
        })
    }
    saveData()
}
showTask();



// localStorage.clear()




