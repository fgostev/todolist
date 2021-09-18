import { projects } from "./projects";

function createForm(){
    const form = document.createElement('form');
    form.id = 'newTodoForm';
    const description =  document.createElement('input');
    description.type = 'text';
    description.id = 'description';
    description.name = 'description';
    description.required = true;
    const date = document.createElement('input');
    date.type = 'date';
    date.id = 'date';
    date.name = 'date';
    date.required = true;

    const labelProjects = document.createElement('label');
    labelProjects.for = "projects";
    labelProjects.textContent = 'Project';
    const selectProject = document.createElement('select');
    selectProject.id = 'selectProject';

    projects.forEach(project => {
        console.log(project);
        const option = document.createElement('option');
        option.value = project;
        option.textContent = project;
        selectProject.append(option);
    })


    const submit = document.createElement('input');
    submit.type = 'text';
    submit.type = 'submit';
    submit.value = 'send';
    submit.id = 'submit';
    form.append(description, date, labelProjects, selectProject,  submit);
    return form;

}

function form(){
    const todoList = document.getElementById('todoList');
    const form = createForm();
    todoList.append(form);
}


export default form;