const toDoForm = document.querySelector('.js-toDoForm');
const toDoInput = toDoForm.querySelector('input');
const toDoList = document.querySelector('.js-toDoList');

function paintToDo(text) {
    const li = document.createElement('li');
    const span = document.createElement('span');
    span.innerText = text;
    li.appendChild(span);
    toDoList.appendChild(li);
}

function handlesSubmit() {
    event.preventDefault();
    const inputValue = toDoInput.value;
    // console.log('입력된 값 : ', inputValue);
    paintToDo(inputValue);
    toDoInput.value = '';
}

function init() {
    toDoForm.addEventListener('submit', handlesSubmit);
}

init();
