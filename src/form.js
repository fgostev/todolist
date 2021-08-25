
function createForm(){
    const form = document.createElement('form');
    form.id = 'newTodoForm';
    const description =  document.createElement('input');
    description.type = 'text';
    description.id = 'description';
    description.name = 'description';
    const date = document.createElement('input');
    date.type = 'date';
    date.id = 'date';
    date.name = 'date';
    const submit = document.createElement('input');
    submit.type = 'text';
    submit.type = 'submit';
    submit.value = 'send';
    submit.id = 'submit';
    form.append(description, date, submit);
    return form;
}

function form(){
    const todoList = document.getElementById('todoList');
    const form = createForm();
    todoList.append(form);
}

export default form;