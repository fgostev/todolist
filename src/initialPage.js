function createHeader(){
    const header = document.createElement('header');
    const h1 = document.createElement('h1');
    h1.textContent = 'TodoList';
    header.appendChild(h1);
    return header;
}

function createNavBar(){
    const nav = document.createElement('nav');
    nav.id = 'sidebar';
    content.appendChild(nav);
    const ul = document.createElement('ul');
    const inbox = document.createElement('li');
    inbox.textContent = 'inbox';
    inbox.id = 'inboxNav'
    const today = document.createElement('li');
    today.textContent = 'today';
    today.id = 'todayNav'
    const tomorrow = document.createElement('li');
    tomorrow.textContent = 'tomorrow';
    tomorrow.id = 'tomorrowNav';
    const thisWeek = document.createElement('li');
    thisWeek.textContent = 'This week';
    thisWeek.id = 'thisWeekNav'
    ul.append(inbox, today, tomorrow, thisWeek);
    const projectsDiv = document.createElement('div');
    const projectHeader = document.createElement('h3');
    projectHeader.textContent = 'Projects';
    projectHeader.id = 'project-header';
    const listOfProjectsContainer = document.createElement('div');
    listOfProjectsContainer.id = 'listOfProjects';
    const plusBtn = document.createElement('btn');
    plusBtn.textContent = "Add Project"
    const plusIcon = document.createElement('i');
    plusIcon.classList = 'fas fa-plus-square'
    plusIcon.id = 'plusIcon';
    plusBtn.id = 'add';
    plusBtn.appendChild(plusIcon);
    nav.append(ul, projectHeader, listOfProjectsContainer, plusBtn);
    return nav;
}

function createMain(){
    const div = document.createElement('div');
    div.id = 'todoList'
    const h2 = document.createElement('h2');
    h2.textContent = 'Tasks'
    const h3 = document.createElement('h3');
    h3.textContent = 'Inbox';
    h3.id = 'inboxHeader'
    div.append(h2, h3);
    const inbox = document.createElement('div');
    inbox.id = 'inbox';
    div.appendChild(inbox);
    return div;
}

function pageLoad(){
    const content = document.getElementById('content');
    const header = createHeader();
    const nav = createNavBar();
    const taskView = createMain();
    document.body.append(header);
    content.append (header, nav, taskView);
}


export default pageLoad;