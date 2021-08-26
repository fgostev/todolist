
class Todo {
    constructor(description, date){
        this.description = description;
        this.date = date;
    }
}

let todoList = [];

function createTodo(){
    const inputDescription = document.getElementById('description').value;
    const inputDate = document.getElementById('date').value;
    const newTodo = new Todo;
    newTodo.description = inputDescription;
    newTodo.date = inputDate;
    todoList.push(newTodo);
}


function displayTodos(todo){
    const todoContainer = document.getElementById('todoList');
    const todoTask = document.createElement('div');
    todoTask.classList = 'task';
    todoContainer.appendChild(todoTask);

    const done = document.createElement('btn');
    done.classList = 'done';
    const icon = document.createElement('i');
    icon.classList = 'far fa-circle';
    todoTask.appendChild(done);
    done.appendChild(icon);

    const p = document.createElement('p');
    p.classList.add('todoDescriptipn');
    p.textContent = todo.description;
    todoTask.appendChild(p);

    const date = document.createElement('p');
    date.classList.add('todoDate');
    date.textContent = todo.date;
    todoTask.appendChild(date);

    const remove = document.createElement('button');
    remove.classList = 'remove';
    const removeIcon = document.createElement('i');
    removeIcon.classList = 'far fa-trash-alt';
    remove.appendChild(removeIcon);
    todoTask.appendChild(remove);

}

function displayPushedTodo(){
    let pushedToDo = todoList[todoList.length - 1];

    todoList.forEach(todo => {
        if(todo === pushedToDo){
        displayTodos(todo);
        }
    })
}

function createTodoTask(){
    createTodo();
    displayPushedTodo();
    idMatchIndex();
    console.log(todoList);
}

function idMatchIndex(){
    const todoTasks = document.getElementsByClassName('task');
    for(let i = 0; i < todoTasks.length; i++){
        todoTasks[i].id = i;
    }
}


function deleteTask(){
    console.log(this.parentElement);
    const selectedTask = this.parentElement;
    selectedTask.remove();
    todoList.splice(parseInt(selectedTask.id), 1);
    idMatchIndex();
    console.log(todoList);
}

export{ createTodoTask, deleteTask};