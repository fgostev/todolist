
import { parseISO, format} from 'date-fns';
import {deleteMessage, emptyOrNotCheck} from './displaySortedTasks';

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

function doneDelete(){
    const doneButtons = document.getElementsByClassName('done');
    Array.from(doneButtons).forEach( button => {
        button.addEventListener('click', deleteTask);
    })
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
    const header = document.getElementById('inboxHeader');
    header.textContent = "Inbox";
    list.forEach(todo => {
        return displayTodos(todo, 'inbox');
    })
}


function createTodoTask(){
    const inbox = document.getElementById('inbox');
    inbox.textContent = "";
    createTodo();
    displayPushedTodo();
}


function deleteTask(){
    const selectedTask = this.parentElement;
    const inboxElementsAmmount = document.getElementById('inbox').childElementCount;
    const inboxClassName = document.getElementById('inbox').className;
    
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
                emptyOrNotCheck();
            }else if( todo.id === selectedTask.id && inboxElementsAmmount === 1){
                const todoIndex = todoList.indexOf(todo);
                todoList.splice(todoIndex, 1);
                selectedTask.remove();
                deleteMessage(inbox, inboxClassName);
            }
        })
    saveToLocalStorage();

}

function todoRemovalListener(){
    const removeBtns = document.getElementsByClassName('remove');
        Array.from(removeBtns).forEach(btn => {
            btn.addEventListener("click", deleteTask);
            });
            doneDelete();
}

function todoTaskHandler(){
    const submit = document.getElementById('newTodoForm');
    const formBtn = document.getElementById('btnOpenForm');
    submit.addEventListener("submit", function(event){
        event.preventDefault();
        createTodoTask();
        saveToLocalStorage();
        todoRemovalListener();
        submit.style.display = "none";
        formBtn.style.display = "block";
        displayAllTodos(todoList);
        })
};



export { todoTaskHandler, displayAllTodos, todoList, displayTodos, defaultTodoList, displayStoragedTasks, todoRemovalListener};
