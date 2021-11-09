import { format, isThisWeek} from 'date-fns';
import { todoList, displayTodos, todoTaskHandler, todoRemovalListener} from './todoTasks';
// import {deleteProjectListener} from './projects';


function getToday(){
    const today = format(new Date(), 'MM/dd/yyyy');
    todoList.forEach(todo => {
        if(todo.date === today){
            displayTodos(todo, 'inbox');
        }       
    })
}

function getTomorrow(){
    const today = new Date();
    const tomorrow = new Date(today)
    tomorrow.setDate(tomorrow.getDate() + 1);
    const tomorrowFormat = format(tomorrow, 'MM/dd/yyyy');
    todoList.forEach(todo => {
        if(todo.date === tomorrowFormat){
            displayTodos(todo, 'inbox');
        }       
    })
}

function getThisWeek(){
    todoList.forEach(todo => {
        if(isThisWeek(new Date(todo.date))){
            displayTodos(todo, 'inbox');
        };
    })
}

function loadToday(){
    const inbox = document.getElementById('inbox');
    inbox.classList = "today";
    inbox.textContent = '';
    getToday();
    todoTaskHandler();
}

function loadTomorrow(){
    const inbox = document.getElementById('inbox');
    inbox.textContent = '';
    inbox.classList = "tomorrow";
    getTomorrow();
    todoTaskHandler();
}

function loadThisWeek(){
    const inbox = document.getElementById('inbox');
    inbox.textContent = '';
    inbox.classList = "thisWeek"
    getThisWeek()
    todoTaskHandler();
}

// dom create delete message

function deleteMessage(display, projectName){
        const deleteMessageDiv = document.createElement('div');
        const message = document.createElement('p');
        message.textContent = "Empty project! Delete it?";
        deleteMessageDiv.id = "noTasks";

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = "delete";
        deleteBtn.classList = "deleteProject";
        deleteBtn.id = projectName;

        deleteMessageDiv.append(message, deleteBtn);
        display.append(deleteMessageDiv);
}

function loadAllProjectTasks(){
    const inbox = document.getElementById('inbox');
    inbox.textContent = '';

    todoList.forEach(todo =>{
    if(todo.project == this.textContent){
            inbox.classList = todo.project;
            displayTodos(todo, 'inbox');
            todoRemovalListener();
        }
    })
    if(inbox.textContent === ''){
        deleteMessage(inbox, this.textContent);
        // deleteProjectListener();
    }
}

export {  loadToday, loadTomorrow, loadThisWeek, loadAllProjectTasks, deleteMessage};