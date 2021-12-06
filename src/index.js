import pageLoad from './initialPage';
import form from './form.js';
import { todoTaskHandler, displayAllTodos, todoList, displayStoragedTasks, idMatchIndex} from './todoTasks';
import {loadTomorrow, loadToday, loadThisWeek, emptyOrNotCheck} from './displaySortedTasks';
import {displayStoragedProjects, openProjectForm, projectForm} from './projects';

import './style.css';

import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'

pageLoad();
displayStoragedTasks();
displayStoragedProjects();
emptyOrNotCheck();
form();
projectForm();


function navigationBar(){
    const inboxNav = document.getElementById('inboxNav');
    const todayNav = document.getElementById('todayNav');
    const tomorrowNav = document.getElementById('tomorrowNav');
    const thisWeekNav = document.getElementById('thisWeekNav');
    const addProjectBtn = document.getElementById('add');
    inboxNav.addEventListener('click', function(){
        displayAllTodos(todoList);
    });
    todayNav.addEventListener('click', loadToday);
    tomorrowNav.addEventListener('click', loadTomorrow);
    thisWeekNav.addEventListener('click', loadThisWeek);
    addProjectBtn.addEventListener('click', openProjectForm);
}


todoTaskHandler();
navigationBar();


