import { parseISO, format} from 'date-fns';

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
    const formatedDate = format(parseISO(inputDate), 'MM/dd/yyyy');
    const newTodo = new Todo;
    newTodo.description = inputDescription;
    newTodo.date = formatedDate;
    todoList.push(newTodo);
}

function defaultTodoList(){
    const clean = new Todo('Clean', format(new Date(), 'MM/dd/yyyy'));
    const code = new Todo('Code for a while', format(new Date(), 'MM/dd/yyyy'))
    const work = new Todo('work', format(new Date(28/8/21), 'MM/dd/yyyy'));
    const explore = new Todo('explore something', format(new Date(28/8/21), 'MM/dd/yyyy'));
    todoList.push(clean, code, work, explore);
}

defaultTodoList();

function displayTodos(todo){
    const todoContainer = document.getElementById('inbox');
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

function displayDefaultTodo(){
    todoList.forEach(todo => {
        console.log(todo);
        displayTodos(todo);
        idMatchIndex();
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


function todoTaskHandler(){
    const submit = document.getElementById('newTodoForm');
    submit.addEventListener("submit", function(event){
        event.preventDefault();
        createTodoTask();
        })
        const removeBtns = document.getElementsByClassName('remove');
        Array.from(removeBtns).forEach(btn => {
            btn.addEventListener("click", deleteTask);
      });
};

export{ todoTaskHandler, displayDefaultTodo, todoList};