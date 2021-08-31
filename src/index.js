import pageLoad from './initialPage';
import form from './form.js';
import { todoTaskHandler, displayAllTodos} from './todoTasks';
import {loadTomorrow, loadToday, loadThisWeek} from './dateSort';

import './style.css';

import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'



pageLoad();
form();
displayAllTodos();



function test(){
    console.log(`test ${this.id}`);
}

function navigationBar(){
    const inboxNav = document.getElementById('inboxNav');
    const todayNav = document.getElementById('todayNav');
    const tomorrowNav = document.getElementById('tomorrowNav');
    const thisWeekNav = document.getElementById('thisWeekNav');

    inboxNav.addEventListener('click', function(){
        displayAllTodos();
        // todoTaskHandler();
    });
    todayNav.addEventListener('click', loadToday);
    tomorrowNav.addEventListener('click', loadTomorrow);
    thisWeekNav.addEventListener('click', loadThisWeek);


}
todoTaskHandler();
navigationBar();


