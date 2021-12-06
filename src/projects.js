import {loadAllProjectTasks} from './displaySortedTasks';
import {displayAllTodos, todoList} from './todoTasks';

let projects = [];

const saveProjectToLocalStorage = () =>{
    localStorage.setItem('storedProjects', JSON.stringify(projects));
}

function displayStoragedProjects(){
let storedProjects = JSON.parse(localStorage.getItem('storedProjects'));

    if(storedProjects){
        projects = storedProjects;
        displayExistingProjects();
        createLinksOnProjects();
    }   else{
        defaultProjects();
        createLinksOnProjects();
    }
}

function defaultProjects(){
    const cleaning = "cleaning";
    const study = 'study';
    const work = 'work';
    projects.push(cleaning, study, work);
    displayExistingProjects();
}


function projectForm(){
    const nav = document.getElementById('sidebar');
    const formDiv = document.createElement('div');
    formDiv.id = 'projectModal';
    const form = document.createElement('form');
    form.id = 'projectForm';
    const projectName =  document.createElement('input');
    projectName.type = 'text';
    projectName.id = 'descriptionProject';
    projectName.name = 'descriptionProject';
    projectName.required = true;

    const nameSubmit = document.createElement('button');
    nameSubmit.type = 'submit';
    nameSubmit.id = 'nameSubmit';

    const addIcon = document.createElement('i');
    addIcon.classList = 'fas fa-plus-square';
    nameSubmit.append(addIcon);

    form.append(projectName, nameSubmit);
    formDiv.append(form);
    formDiv.style.display = 'none';
    nav.append(formDiv);
    createProjectListeners();
}


function createProject(){
    const form = document.getElementById('projectForm');
    let newProject = form.descriptionProject.value;
        if(newProject != ""){   
        projects.push(newProject);
        saveProjectToLocalStorage();
    }
}


function displayExistingProjects(){
    const listOfProjectsContainer = document.getElementById('listOfProjects');
    projects.forEach(project => {
        const projectCon = document.createElement('div');
        projectCon.textContent = project;
        projectCon.id = 'project' + '-' + project;
        projectCon.className = 'project';
        listOfProjectsContainer.appendChild(projectCon);
    })
}

function addToTheList(){
    const form = document.getElementById('projectForm');
    const listOfProjectsContainer = document.getElementById('listOfProjects');
    const project = document.createElement('div');
    const projectName = form.descriptionProject.value;
    project.id = 'project' + '-' + projectName;
    project.className = 'project';
    project.textContent = projectName;
    listOfProjectsContainer.appendChild(project);
}

function createProjectListeners(){
    const submit = document.getElementById('nameSubmit');
    submit.addEventListener('click', function(event){
        event.preventDefault();
        createProject();
        addToTheList();
        createLinksOnProjects();
        updateFormOptions();
        closeProjectForm();
    })
}

function openProjectForm(){
    const descriptionInput = document.getElementById('descriptionProject');
    descriptionInput.value = '';
    const btn = document.getElementById("add");
    btn.style.display = "none";
    const formDiv = document.getElementById('projectModal');
    formDiv.style.display = 'block';
}

function closeProjectForm(){
    const formDiv = document.getElementById('projectModal');
    formDiv.style.display = 'none';
    const btn = document.getElementById("add");
    btn.style.display = "block";
}

function createLinksOnProjects(){
    const projects = document.getElementsByClassName('project');
    Array.from(projects).forEach(project => {
        project.addEventListener('click', loadAllProjectTasks);
    })
}

function updateFormOptions(){
    const selectProject = document.getElementById('selectProject');
    selectProject.textContent = "";
    projects.forEach(project => {
        const option = document.createElement('option');
        option.value = project;
        option.textContent = project;
        selectProject.append(option);
    })
}

function deleteProjectBtn(){
    const projectListDom = document.getElementById('listOfProjects')
    const deleteBtnId = this.id;
    const projectIndx = projects.indexOf(deleteBtnId);
    projectListDom.removeChild(projectListDom.childNodes[projectIndx])
    projects.splice(projectIndx, 1);
    updateFormOptions();
    displayAllTodos(todoList);
    saveProjectToLocalStorage();
}

function deleteProjectListener(){
    const deleteBtn = document.getElementsByClassName('deleteProject')[0];
    deleteBtn.addEventListener('click', deleteProjectBtn);
}


export {projectForm, openProjectForm, displayStoragedProjects, deleteProjectListener, projects};

