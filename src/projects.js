// Figure out why li and forms are not working
// Try perhaps divs or something else!!!
// figure out why multiply/wher code repeats


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
    projectListeners();
}


function createProject(){
    const form = document.getElementById('projectForm');
    const newProject = form.description.value
    projects.push(newProject);
}

// miissing list of projects

function addToTheList(){
    const nav = document.getElementById('sidebar')
    const listOfProjectsContainer = document.createElement('div');
    listOfProjectsContainer.id = 'listOfProjects';
    nav.appendChild(listOfProjectsContainer);
    const project = document.createElement('div');
    const projectName = projects[projects.length - 1];
    project.textContent = projectName;
    console.log(projects[projects.length - 1]);
    listOfProjectsContainer.appendChild(project);
}

function projectListeners(){
    const form = document.getElementById('projectForm');
    form.addEventListener("submit", function(event){
        event.preventDefault();
        createProject();
        addToTheList();
        closeProjectForm();
        console.log(projects);
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


export {projectForm, openProjectForm};


// create a btn and and add it separately to the main page