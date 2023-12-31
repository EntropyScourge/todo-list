import toDoList from 'modules/toDoList.js';
import loadContent from './modules/loadContent';

const newListBtn = document.getElementById('new-list-button');
newListBtn.addEventListener("click", () => {
    let list = toDoList();
});