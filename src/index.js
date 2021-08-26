import pageLoad from './initialPage';
import form from './form.js';
import { createTodoTask, deleteTask} from './todoTasks';

import './style.css';

import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'

pageLoad();
form();


function eventListeners(){
    const submit = document.getElementById('submit');
    submit.addEventListener("click", function(event){
        event.preventDefault();
        createTodoTask();

        const removeBtns = document.getElementsByClassName('remove');
        Array.from(removeBtns).forEach(btn => {
            btn.addEventListener("click", deleteTask);
        })


      });

};



eventListeners();


