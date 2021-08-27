import pageLoad from './initialPage';
import form from './form.js';
import { todoTaskHandler } from './todoTasks';
import loadToday from './dateSort';

import './style.css';

import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'



pageLoad();
form();

// dateTest();



function test(){
    console.log(`test ${this.id}`);
}

function navigationBar(){
    const inboxNav = document.getElementById('inboxNav');
    const todayNav = document.getElementById('todayNav');
    const tomorrowNav = document.getElementById('tomorrowNav');
    const thisWeekNav = document.getElementById('thisWeekNav');

    inboxNav.addEventListener('click', test);
    todayNav.addEventListener('click', loadToday);
    tomorrowNav.addEventListener('click', test);
    thisWeekNav.addEventListener('click', test);


}

navigationBar();
todoTaskHandler();


