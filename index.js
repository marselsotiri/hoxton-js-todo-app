{/* <li class="todo">
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
--> */}


let todos = [
    {
        text: 'Shopping',
        completed: false
    },
    {
        text: 'Work',
        completed: true
    }
]

for (const todo of todos){
    renderTodoCompleted(todo)
}


function renderTodo(todo){
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

    const todoUlList = document.querySelector(".todo-list")
    todoUlList.append(todoLi)
}


function renderTodoCompleted(todo){
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

    const todoCompletedList = document.querySelector(".completed-list")
    todoCompletedList.append(todoLi)

    
}