function createHeader(){
    const header = document.createElement('header');
    const h1 = document.createElement('h1');
    h1.textContent = 'Todo list';
    header.appendChild(h1);
    return header;
}

function createNavBar(){
    const nav = document.createElement('nav');
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
    const someDay = document.createElement('li');
    someDay.textContent = 'Someday';
    someDay.id = 'someDayNav';
    ul.append(inbox, today, tomorrow, thisWeek, someDay);
    nav.appendChild(ul);
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