import pageLoad from './initialPage';
import form from './form.js';
import { todoTaskHandler, displayAllTodos, todoList, displayStoragedTasks} from './todoTasks';
import {loadTomorrow, loadToday, loadThisWeek} from './displaySortedTasks';
import {displayStoragedProjects, openProjectForm, projectForm} from './projects';

import './style.css';

import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'

pageLoad();
displayStoragedTasks();
// defaultTodoList();
displayStoragedProjects();
form();
projectForm();

// keep a thought to change the order for further adjustment


function navigationBar(){
    const inboxNav = document.getElementById('inboxNav');
    const todayNav = document.getElementById('todayNav');
    const tomorrowNav = document.getElementById('tomorrowNav');
    const thisWeekNav = document.getElementById('thisWeekNav');
    const addProjectBtn = document.getElementById('add');

    inboxNav.addEventListener('click', function(){
        displayAllTodos(todoList);
        // todoTaskHandler();
    });
    todayNav.addEventListener('click', loadToday);
    tomorrowNav.addEventListener('click', loadTomorrow);
    thisWeekNav.addEventListener('click', loadThisWeek);
    addProjectBtn.addEventListener('click', openProjectForm);
}

todoTaskHandler();
navigationBar();


