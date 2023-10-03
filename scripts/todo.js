const todoList = [{
    name: 'make dinner',
    dueDate: '21-11-2023'
},{
    name: 'wash dishes',
    dueDate: '25-10-2023'
}
];
renderTodoList();

function renderTodoList(){
    let todoListHTML = '';

    for(let i=0; i < todoListHTML.length; i++){
        const todoObject = todoList[i];
        //const name = todoObject.name;
        //const dueDate = todoObject.date;
const {name, dueDate} = todoObject;

        const html = `
        <div>${name}</div>
        <div>${dueDate}</div>
        <button onclick="
        todoList.splice(${i},1);
        renderTodoList();
        ">Delete</button>
        </p>`;
        todoListHTML += html;
    }

    document.querySelector('.js-todo-list')
    .innerHTML = todoListHTML;
}

function addTodo(){
    const inputElement = document.querySelector('js-name-input');
    const name = inputElement.value;

    const dateInputElement = document.querySelector('js-due-date-input');
    const dueDate = inputElement.value;


    todoList.push({ name, dueDate});

    inputElement.value = '';

    renderTodoList();
}