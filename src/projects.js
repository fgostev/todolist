// Display projects - figure out a way to display previously created projects
// Make project to work as links (aka as todo tasks)


const projects = [];

function projectForm(){
    const nav = document.getElementById('sidebar');
    const formDiv = document.createElement('div');
    formDiv.id = 'projectModal';
    const form = document.createElement('form');
    form.id = 'projectForm';
    const projectName =  document.createElement('input');
    projectName.type = 'text';
    projectName.id = 'description';
    projectName.name = 'description';
    projectName.required = true;
    const nameSubmit = document.createElement('input');
    nameSubmit.type = 'submit';
    nameSubmit.id = 'nameSubmit'
    form.append(projectName, nameSubmit);
    formDiv.append(form);
    formDiv.style.display = 'none';
    nav.append(formDiv);
    createProjectListeners();
}


function createProject(){
    const form = document.getElementById('projectForm');
    const newProject = form.description.value
    projects.push(newProject);
}

function defaultProjects(){
    const cleaning = "cleaning";
    const study = 'study';
    const work = 'work';
    projects.push(cleaning, study, work);
    displayExistingProjects();
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

// move list of projects into the default function of navbar

function addToTheList(){
    const listOfProjectsContainer = document.getElementById('listOfProjects');
    const project = document.createElement('div');
    const projectName = projects[projects.length - 1];
    project.id = 'project' + '-' + projectName;
    project.className = 'project';
    project.textContent = projectName;
    listOfProjectsContainer.appendChild(project);
}

function createProjectListeners(){
    const form = document.getElementById('projectForm');
    form.addEventListener("submit", function(event){
        event.preventDefault();
        createProject();
        addToTheList();
        createLinksOnProjects();
        closeProjectForm();
    })
}

function openProjectForm(){
    const descriptionInput = document.getElementById('description');
    descriptionInput.value = '';
    const formDiv = document.getElementById('projectModal');
    formDiv.style.display = 'block';
    console.log("Open!")
}

function closeProjectForm(){
    const formDiv = document.getElementById('projectModal');
    formDiv.style.display = 'none';
    console.log("Close!")
}

function test(){
    console.log(`test!!!` + this.id);
}

function createLinksOnProjects(){
    const projects = document.getElementsByClassName('project');
    Array.from(projects).forEach(project => {
        project.addEventListener('click', test);
    })

}

export {projectForm, openProjectForm, defaultProjects};


// add a few default projects

// All projects are clickable
// once project click show only items related to the project

// add in todo the option to pick a project

// don't forget to think on the delete project from menu