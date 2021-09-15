function createHeader(){
    const header = document.createElement('header');
    const h1 = document.createElement('h1');
    h1.textContent = 'Todo list';
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
    const projects = document.createElement('h3');
    projects.textContent = 'Projects';
    projects.id = 'project-header';
    const plusBtn = document.createElement('btn');
    const plusIcon = document.createElement('i');
    plusIcon.classList = 'fas fa-plus-square'
    plusBtn.id = 'add';
    plusBtn.appendChild(plusIcon);
    nav.append(ul, projects, plusBtn);
    return nav;
}

function createMain(){
    const div = document.createElement('div');
    div.id = 'todoList'
    const h2 = document.createElement('h2');
    h2.textContent = 'Tasks'
    div.appendChild(h2);
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
    content.append(header, nav, taskView);
}


export default pageLoad;