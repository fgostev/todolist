import { format, isThisWeek} from 'date-fns';
import { todoList, displayTodos} from './todoTasks';


function getToday(){
    const today = format(new Date(), 'MM/dd/yyyy');
    let todayList = []
    todoList.forEach(todo => {
        if(todo.date === today){
            displayTodos(todo, 'inbox');
            todayList.push(todo);
        }       
    })
}

function getTomorrow(){
    const today = new Date();
    const tomorrow = new Date(today)
    tomorrow.setDate(tomorrow.getDate() + 1);
    const tomorrowFormat = format(tomorrow, 'MM/dd/yyyy');
    let tomorrowList = [];
    todoList.forEach(todo => {
        if(todo.date === tomorrowFormat){
            displayTodos(todo, 'inbox');
            tomorrowList.push(todo);
        }       
    })
}

function getThisWeek(){
    let thisWeek = [];
    todoList.forEach(todo => {
        if(isThisWeek(new Date(todo.date))){
            displayTodos(todo, 'inbox');
            thisWeek.push(todo);
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

export {  loadToday, loadTomorrow, loadThisWeek };