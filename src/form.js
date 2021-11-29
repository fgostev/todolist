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
        const option = document.createElement('option');
        option.value = project;
        option.textContent = project;
        selectProject.append(option);
    })

    const optionNone = document.createElement('option');
    optionNone.text = "None"
    selectProject.append(optionNone);

    const submit = document.createElement('input');
    submit.type = 'text';
    submit.type = 'submit';
    submit.value = 'send';
    submit.id = 'submit';
    form.append(description, date, labelProjects, selectProject,  submit);
    form.style.display = "none";
    return form;

}

function formButton(){
    const btn = document.createElement('button');
    btn.id = "btnOpenForm";
    const icon = document.createElement('i');
    icon.classList = "fas fa-plus-square";
    btn.append(icon);
    return btn;
}

function openForm(){
  const form  = document.getElementById('newTodoForm');
  const btn = document.getElementById('btnOpenForm');
  btn.style.display = "none";
  form.style.display = "flex";
  console.log("Booo!");
}

function form(){
    const todoList = document.getElementById('todoList');
    const form = createForm();
    const formBtn = formButton();
    todoList.append(formBtn, form);
    formBtn.addEventListener('click', openForm);
}


export default form;