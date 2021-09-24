import { format, isThisWeek} from 'date-fns';
import { todoList, displayTodos} from './todoTasks';


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
    inbox.textContent = '';
    getToday();
}

function loadTomorrow(){
    const inbox = document.getElementById('inbox');
    inbox.textContent = '';
    getTomorrow();
}

function loadThisWeek(){
    const inbox = document.getElementById('inbox');
    inbox.textContent = '';
    getThisWeek()
}

function loadAllProjectTasks(){
    const inbox = document.getElementById('inbox');
    inbox.textContent = '';

    todoList.forEach(todo =>{
        if(todo.project == this.textContent){
            displayTodos(todo, 'inbox');
        }
    })
}

export {  loadToday, loadTomorrow, loadThisWeek, loadAllProjectTasks};