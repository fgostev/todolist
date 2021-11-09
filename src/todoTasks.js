
import { parseISO, format} from 'date-fns';
// import { loadAllProjectTasks } from './displaySortedTasks';
// import { deleteProjectListener, projects } from './projects';
import {deleteMessage} from './displaySortedTasks';


class Todo {
    constructor(description, date, project, id){
        this.description = description;
        this.date = date;
        this.project = project;
        this.id = id;
    }
}

let todoList = [];

const saveToLocalStorage = () =>{
    localStorage.setItem('storedTodo', JSON.stringify(todoList));
}

function displayStoragedTasks(){
let storedTodo = JSON.parse(localStorage.getItem('storedTodo'));

    if(storedTodo){
        todoList = storedTodo;
        displayAllTodos(todoList);
    }   else{
        defaultTodoList();
    }
}


function createTodo(){
    const inputDescription = document.getElementById('description').value;
    const inputDate = document.getElementById('date').value;
    const selectedProject = document.getElementById('selectProject').value;
    const formatedDate = format(parseISO(inputDate), 'MM/dd/yyyy');
    const newTodo = new Todo;
    newTodo.description = inputDescription;
    newTodo.date = formatedDate;
    newTodo.project = selectedProject;
    newTodo.id = uniqueId();
    todoList.push(newTodo);

    console.log(todoList);
}

const uniqueId = () => {
    const dateString = Date.now().toString(36);
    const randomness = Math.random().toString(36).substr(2);
    return dateString + randomness;
  };


function defaultTodoList(){
    const clean = new Todo('Clean', format(new Date(), 'MM/dd/yyyy'), 'cleaning', uniqueId());
    const code = new Todo('Code for a while', format(new Date(), 'MM/dd/yyyy'), 'study', uniqueId())
    const work = new Todo('work', format(new Date('2021-08-30'), 'MM/dd/yyyy'), 'work', uniqueId());
    const explore = new Todo('explore something', format(new Date('2021-08-30'), 'MM/dd/yyyy'), 'none' ,uniqueId());
    todoList.push(clean, code, work, explore);
    displayAllTodos(todoList);
}



function displayTodos(todo, container){
    const todoContainer = document.getElementById(container);
    const todoTask = document.createElement('div');
    todoTask.classList = 'task' + " " + todo.project;
    todoTask.id = todo.id;
    todoContainer.appendChild(todoTask);

    const done = document.createElement('btn');
    done.classList = 'done';
    const icon = document.createElement('i');
    icon.classList = 'far fa-circle';
    todoTask.appendChild(done);
    done.appendChild(icon);

    const p = document.createElement('p');
    p.classList.add('todoDescription');
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

    todoRemovalListener();

}

function displayPushedTodo(){
    let pushedToDo = todoList[todoList.length - 1];

    todoList.forEach(todo => {
        if(todo === pushedToDo){
        displayTodos(todo, 'inbox');
        }
    })
}

function displayAllTodos(list){
    const inbox = document.getElementById('inbox');
    inbox.textContent = '';
    inbox.classList = 'inbox';
    list.forEach(todo => {
        return displayTodos(todo, 'inbox');
    })
}


function createTodoTask(){
    createTodo();
    displayPushedTodo();
}


function deleteTask(){
    const selectedTask = this.parentElement;
    const inboxElementsAmmount = document.getElementById('inbox').childElementCount;
    const inboxClassName = document.getElementById('inbox').className;
    
    console.log(inboxClassName);


    // STOP HERE! Need to get a differnce between week days delete and project.

        todoList.forEach(todo => {
            if(todo.id === selectedTask.id && inboxElementsAmmount > 1 || 
                todo.id === selectedTask.id && inboxClassName === "inbox" ||
                todo.id === selectedTask.id && inboxClassName === "today" ||
                todo.id === selectedTask.id && inboxClassName === "tomorrow" ||
                todo.id === selectedTask.id && inboxClassName === "thisWeek"
            ){
                const todoIndex = todoList.indexOf(todo);
                todoList.splice(todoIndex, 1);
                selectedTask.remove();
                console.log(todoList);
            }else if( todo.id === selectedTask.id && inboxElementsAmmount === 1){
                const todoIndex = todoList.indexOf(todo);
                todoList.splice(todoIndex, 1);
                selectedTask.remove();
                deleteMessage(inbox, this.textContent);
            }
        })
    saveToLocalStorage();

}

function todoTaskHandler(){
    const submit = document.getElementById('newTodoForm');
    submit.addEventListener("submit", function(event){
        event.preventDefault();
        createTodoTask();
        saveToLocalStorage();
        todoRemovalListener();
        })
};

function todoRemovalListener(){
    const removeBtns = document.getElementsByClassName('remove');
        Array.from(removeBtns).forEach(btn => {
            btn.addEventListener("click", deleteTask);
            });
}

export { todoTaskHandler, displayAllTodos, todoList, displayTodos, defaultTodoList, displayStoragedTasks, todoRemovalListener};
