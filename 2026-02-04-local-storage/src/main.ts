// @ts-nocheck

import './style.css';

const LS_DB_ID = 'todoList';

let myData = [];

const input = document.querySelector('#addItem');
const readBtn = document.querySelector('#read');
const writeBtn = document.querySelector('#write');
const deleteBtn = document.querySelector('#delete');

input?.addEventListener('keydown', checkInputConfirm);

deleteBtn?.addEventListener('click', deleteFromLocalStorage);

const ENTER_KEY = 13;
function checkInputConfirm(e) {
  if (e.keyCode !== ENTER_KEY) {
    return;
  }

  myData.push({
    text: input.value,
    completed: false,
  });

  input.value = '';

  console.log('mydata', myData);
  saveToLocalStorage();
  writeToScreen();
}

function saveToLocalStorage() {
  const stringified = JSON.stringify(myData);

  localStorage.setItem(LS_DB_ID, stringified);

  console.log('Data saved.');
}

function readFromLocalStorage() {
  const savedValue = localStorage.getItem(LS_DB_ID);

  if (savedValue === null) {
    console.warn('Det finns inget sparat i localStorage');

    return;
  }

  myData = JSON.parse(savedValue);

  console.log('myData är nu', myData);
}

const dataHtmlEl = document.querySelector('#data');
function writeToScreen() {
  let html = '<ul>';

  myData.forEach((todo, index) => {
    html += `
      <li>${todo.text} - ${todo.completed}
        <button class="delete" data-id="${index}" data-completed="false">Radera</button>
      </li>`;
  });

  html += '</ul>';

  dataHtmlEl.innerHTML = html;

  document.querySelectorAll('button.delete').forEach((btn) => {
    btn.addEventListener('click', deleteToDo);
  });
}

function deleteToDo(e) { // e är en förkortning för event
  const id = Number(e.target.dataset.id);

  console.log(e.target); // e.target är den knappen som man har klickat på
  console.log(e.target.dataset); // dataset är data-attributet på html-elementet
  console.log(e.target.dataset.completed); // det specifika attributet
  
  myData.splice(id, 1);

  saveToLocalStorage();

  writeToScreen();
}

function deleteFromLocalStorage() {
  localStorage.removeItem(LS_DB_ID);
  myData = [];

  writeToScreen();
}

readFromLocalStorage();

writeToScreen();