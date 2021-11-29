import { format, isThisWeek} from 'date-fns';
import { todoList, displayTodos, todoRemovalListener} from './todoTasks';
import {deleteProjectListener} from './projects';


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
    const header = document.getElementById('inboxHeader');
    header.textContent = "Today";
    inbox.classList = "today";
    inbox.textContent = '';
    getToday();
    emptyOrNotCheck();
    todoRemovalListener();
}

function loadTomorrow(){
    const inbox = document.getElementById('inbox');
    const header = document.getElementById('inboxHeader');
    header.textContent = "Tomorrow";
    inbox.textContent = '';
    inbox.classList = "tomorrow";
    getTomorrow();
    emptyOrNotCheck();
    todoRemovalListener();
}

function loadThisWeek(){
    const inbox = document.getElementById('inbox');
    const header = document.getElementById('inboxHeader');
    header.textContent = "This Week"
    inbox.textContent = '';
    inbox.classList = "thisWeek"
    getThisWeek();
    emptyOrNotCheck();
    todoRemovalListener();
}

function emptyOrNotCheck(){
    const inbox = document.getElementById('inbox')
    const amountOfTasks = inbox.childElementCount;
    const selectedNav = inbox.className;
    if(amountOfTasks === 0 && selectedNav === "thisWeek"){
        createEmptyMessage("this week");
    }else if(amountOfTasks === 0 && selectedNav !== "thisWeek"){
        createEmptyMessage(selectedNav);
    }
}

function createEmptyMessage(selectedDay){
    const message = document.createElement('p');
    const inbox = document.getElementById('inbox');
    const emptyMessage = document.createElement('div');
    message.textContent = `No tasks for ${selectedDay}. Would you like to create a new one?`;
    emptyMessage.append(message);
    inbox.append(emptyMessage);
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

        deleteProjectListener();
}

function loadAllProjectTasks(){
    const inbox = document.getElementById('inbox');
    inbox.textContent = '';

    const header = document.getElementById('inboxHeader');

    todoList.forEach(todo =>{
    if(todo.project == this.textContent){
            header.textContent = todo.project;
            inbox.classList = todo.project;
            displayTodos(todo, 'inbox');
            todoRemovalListener();
        }
    })
    if(inbox.textContent === ''){
        deleteMessage(inbox, this.textContent);
    }
}

export {  loadToday, loadTomorrow, loadThisWeek, loadAllProjectTasks, deleteMessage, emptyOrNotCheck};