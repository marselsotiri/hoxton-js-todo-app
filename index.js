/* <li class="todo">
  <div class="completed-section">
    <input class="completed-checkbox" type="checkbox" />
  </div>
  <div class="text-section">
    <p class="text">Go shopping</p>
  </div>
  <div class="button-section">
    <button class="edit">Edit</button>
    <button class="delete">Delete</button>
  </div>
</li>

<!--
  The completed one is exactly the same,
  but with an extra completed class in the li
  <li class="todo completed">
--> */

// How to work with state:
// 1. create some state
// 2. render the app based on the state
// 3. update the state
// 4. rerender the app based on the new state


const showCompletedCheckbox = document.querySelector('.show-completed-checkbox')
const addTodoForm = document.querySelector('.add-item')
const todoList = document.querySelector('.todo-list')
const completedList = document.querySelector('.completed-list')



const state = {

    todos: [
        {
            text: 'Shopping',
            completed: false
        },
        {
            text: 'Work',
            completed: false
        },
        {
            text: 'Home',
            completed: true
        }
    ],
    showCompleted: true

}

// Functions to get derived state
function getCompletedTodos() {
    return state.todos.filter(function (todo) {
        return todo.completed
    })
}

function getIncompleteTodos() {
    return state.todos.filter(function (todo) {
        return !todo.completed
    })
}

function toggleTodo(todo) {
    todo.completed = !todo.completed
}

function addTodo(title) {
    const todo = {
        text: title,
        completed: false
    }
    state.todos.push(todo)
}

function deleteTodo(title) {
    const updatedTodos = state.todos.filter(function (todo) {
        return todo.text !== title
    })

    state.todos = updatedTodos
}

function editTodo(todo, newtext) {
    todo.text = newtext
}

function toggleShowCompleted() {
    state.showCompleted = !state.showCompleted
}


function renderTodo() {
    const incompleteTodos = getIncompleteTodos()
    todoList.innerHTML = ''

    for (const todo of incompleteTodos) {
        const todoLi = document.createElement('li')
        todoLi.setAttribute('class', 'todo')

        const todoDivSection = document.createElement('div')
        todoDivSection.setAttribute('class', 'completed-section')
        const inputElCheckbox = document.createElement('input')
        inputElCheckbox.setAttribute('class', 'completed-checkbox')
        inputElCheckbox.setAttribute('type', 'checkbox')
        todoDivSection.append(inputElCheckbox)


        const todoDivText = document.createElement('div')
        todoDivText.setAttribute('class', 'text-section')
        const pEl = document.createElement('p')
        pEl.setAttribute('class', 'text')
        pEl.textContent = todo.text
        todoDivText.append(pEl)


        const todoDivButton = document.createElement('div')
        todoDivButton.setAttribute('class', 'button-section')
        const buttonEdit = document.createElement('button')
        buttonEdit.setAttribute('class', 'edit')
        buttonEdit.textContent = "Edit"
        const buttonDelette = document.createElement('button')
        buttonDelette.setAttribute('class', 'delete')
        buttonDelette.textContent = "Delete"
        todoDivButton.append(buttonEdit, buttonDelette)

        todoLi.append(todoDivSection, todoDivText, todoDivButton)



        todoList.append(todoLi)

        const completedCheckbox = todoLi.querySelector('.completed-checkbox')
        completedCheckbox.checked = todo.completed
        completedCheckbox.addEventListener('click', function () {
            // toggle the todo
            toggleTodo(todo)
            // rerender the app
            render()
        })

        // When I click the delete button for a todo
        const deleteBtn = todoLi.querySelector('.delete')
        deleteBtn.addEventListener('click', function () {
            // delete the todo with this title
            deleteTodo(todo.text)
            // rerender the page
            render()
        })



    }
}


function renderTodoCompleted() {

    const completedTodos = getCompletedTodos()
    completedList.innerHTML = ''

    const completedSection = document.querySelector('section.completed-section')
    if (state.showCompleted) completedSection.style.display = 'block'
    else completedSection.style.display = 'none'


    for (const todo of completedTodos) {
        const todoLi = document.createElement('li')
        todoLi.setAttribute('class', 'todo completed')

        const todoDivSection = document.createElement('div')
        todoDivSection.setAttribute('class', 'completed-section')
        const inputElCheckbox = document.createElement('input')
        inputElCheckbox.setAttribute('class', 'completed-checkbox')
        inputElCheckbox.setAttribute('type', 'checkbox')
        todoDivSection.append(inputElCheckbox)


        const todoDivText = document.createElement('div')
        todoDivText.setAttribute('class', 'text-section')
        const pEl = document.createElement('p')
        pEl.setAttribute('class', 'text')
        pEl.textContent = todo.text
        todoDivText.append(pEl)


        const todoDivButton = document.createElement('div')
        todoDivButton.setAttribute('class', 'button-section')
        const buttonEdit = document.createElement('button')
        buttonEdit.setAttribute('class', 'edit')
        buttonEdit.textContent = "Edit"
        const buttonDelette = document.createElement('button')
        buttonDelette.setAttribute('class', 'delete')
        buttonDelette.textContent = "Delete"
        todoDivButton.append(buttonEdit, buttonDelette)

        todoLi.append(todoDivSection, todoDivText, todoDivButton)

        completedList.append(todoLi)

        const completedCheckbox = todoLi.querySelector('.completed-checkbox')
        completedCheckbox.checked = todo.completed
        completedCheckbox.addEventListener('click', function () {
            // toggle the todo
            toggleTodo(todo)
            // rerender the app
            render()
        })

        // When I click the delete button for a todo
        const deleteBtn = todoLi.querySelector('.delete')
        deleteBtn.addEventListener('click', function () {
            // delete the todo with this title
            deleteTodo(todo.text)
            // rerender the page
            render()
        })


    }
}

function renderCheckbox () {
    if (state.showCompleted) showCompletedCheckbox.checked = true
    else showCompletedCheckbox.checked = false
  }
  


function render() {
    renderTodo()
    renderTodoCompleted()
    renderCheckbox ()
}

// Helper functions
function listenToShowCompletedCheckbox () {
    showCompletedCheckbox.addEventListener('click', function () {
      toggleShowCompleted()
      render()
    })
  }
  
  function listenToAddTodoForm () {
    // When the todo form is submitted:
    addTodoForm.addEventListener('submit', function (event) {
      // prevent the form from refreshing the page
      event.preventDefault()
  
      // - Add a new todo to the todos array
      addTodo(addTodoForm.title.value)
  
      // clear up the form
      addTodoForm.reset()
  
      // - Rerender
      render()
    })
  }
  
  function init () {
    render()
    listenToShowCompletedCheckbox()
    listenToAddTodoForm()
  }
  
  init()