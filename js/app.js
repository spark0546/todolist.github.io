// user log in
const savedName = localStorage.getItem('user');
if(savedName){
    document.querySelector('.user > span').innerText = savedName;
} else {
    document.querySelector('#log').checked = true;
}
function say(e){
    e.preventDefault();
    const userName = document.acount.user_name;
    localStorage.setItem('user',userName.value);
    document.querySelector('.user > span').innerText = userName.value;
    userName.value = '';
    document.querySelector('#log').checked = false;
}
document.acount.addEventListener('submit',say);

// background images random change at reload.
const bgImgList = [];
for(i = 1; i <= 20; i++){
    bgImgList.push(`./images/bg${i}.jpg`);
}
(function(){
    const rndBg = Math.floor(Math.random() * bgImgList.length);
    document.querySelector('.full_screen').style.backgroundImage = `url(${bgImgList[rndBg]})`;
})();




// todolist
const todoItem = document.add_list.todo;
const todoList = document.querySelector('.todo > ul');
let todo = [];
function deleteList(e){
    const list = e.target.parentNode;
    const listId = Number(list.id);
    todo = todo.filter((pass) => pass.id !== listId);
    localStorage.setItem(TODO_LOCAL_KEY, JSON.stringify(todo));
    list.remove();
}
const TODO_LOCAL_KEY = 'todo';
function saveTodo(listItemObj){
    todo.push(listItemObj);
    localStorage.setItem(TODO_LOCAL_KEY, JSON.stringify(todo));
}
function addList(listItem){    
    const liTag = document.createElement('li');
    liTag.id = listItem.id;
    const spanTag = document.createElement('span');
    liTag.appendChild(spanTag);
    spanTag.innerText = listItem.text;
    const btn = document.createElement('button');
    liTag.appendChild(btn);
    btn.innerText = '💣';
    btn.setAttribute('title','Delete list.');
    todoList.prepend(liTag);
    btn.addEventListener('click',deleteList);
}
function submitHandler(e){
    e.preventDefault();
    const listItemObj = {
        text:todoItem.value,
        id:Date.now()
    }
    todoItem.value = '';
    addList(listItemObj);
    saveTodo(listItemObj);
}
document.add_list.addEventListener('submit',submitHandler);

const savedToDo = localStorage.getItem(TODO_LOCAL_KEY);
if(savedToDo){
    const parsedToDo = JSON.parse(savedToDo);
    parsedToDo.forEach(addList);
    todo = parsedToDo;
}
