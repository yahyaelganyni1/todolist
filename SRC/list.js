import { addActionListner } from './dragAndDrop.js';
import { List } from './addNewList';
import { addCheck } from './check.js';
const theList = document.querySelector('.the-list');
const inputBox = document.querySelector('.input-box');
let icons = document.querySelectorAll('li i');
let clearBtn = document.querySelector('.clear-btn');

let listItems = [];

if (localStorage.length < 1) {
  listItems = [];
  localStorage.setItem('list', JSON.stringify(listItems));
} else {
  listItems = JSON.parse(localStorage.getItem('list'));
}

inputBox.addEventListener('keypress', (e) => {
  if (e.key === 'Enter' && inputBox.value.length > 0) {
    const theListObject = new List(inputBox.value, false, listItems.length + 1);
    listItems.push(theListObject);
    theListObject.renderListElemenet();
    localStorage.setItem('list', JSON.stringify(listItems));
    localStorageList = JSON.parse(localStorage.getItem('list'));

    localRender();
  }
});

const renderListElemenet = (description, completed, id) => {
  const li = document.createElement('li');
  li.id = id;
  li.classList.add('list');
  li.setAttribute('draggable', 'true');
  if (completed) li.classList.add('checked');
  const text = document.createElement('p');
  text.classList.add('text');
  text.setAttribute('contenteditable', true);
  text.addEventListener('focusout', (e) => {
    listItems[id - 1].description = text.innerHTML;
    localStorage.setItem('list', JSON.stringify(listItems));
  });
  const moreIcon = document.createElement('i');
  const div = document.createElement('div');
  text.innerHTML = description;
  const checbox = document.createElement('input');
  checbox.setAttribute('type', 'checkbox');
  checbox.classList.add('checkbox');
  moreIcon.setAttribute('class', 'fas fa-trash');
  checbox.checked = completed;
  div.appendChild(checbox);
  div.appendChild(text);
  li.appendChild(div);
  li.appendChild(moreIcon);
  theList.appendChild(li);
};

let localStorageList = JSON.parse(localStorage.getItem('list')); //retrieve the object

const localRender = () => {
  theList.innerHTML = '';
  localStorageList
    .sort((a, b) => a.index - b.index)
    .forEach((item) => {
      renderListElemenet(item.description, item.completed, item.index);
    });
  icons = document.querySelectorAll('li i');
  addActionListner();
  addCheck();
  icons.forEach((icon) => {
    icon.addEventListener('click', (e) => {
      listItems.splice(Array.prototype.indexOf.call(icons, e.target), 1);
      listItems.forEach((item, index) => (item.index = index + 1));
      localStorage.setItem('list', JSON.stringify(listItems));
      localStorageList = JSON.parse(localStorage.getItem('list'));
      localRender();
    });
  });
  clearBtn.addEventListener('click', (e) => {
    listItems = listItems.filter((item) => item.completed === false);
    listItems.forEach((item, index) => (item.index = index + 1));
    localStorage.setItem('list', JSON.stringify(listItems));
    localStorageList = JSON.parse(localStorage.getItem('list'));
    localRender();
  });
};
const swapLocal = (firstId, secondId) => {
  localStorageList = JSON.parse(localStorage.getItem('list'));
  firstId = firstId - 1;
  secondId = secondId - 1;

  let tempdescription = JSON.parse(
    JSON.stringify(listItems[firstId].description)
  );
  let tempcompleted = listItems[firstId].completed;

  listItems[firstId].description = listItems[secondId].description;
  listItems[firstId].completed = listItems[secondId].completed;
  listItems[secondId].description = tempdescription;
  listItems[secondId].completed = tempcompleted;

  localStorage.setItem('list', JSON.stringify(listItems));
  localStorageList = JSON.parse(localStorage.getItem('list'));

  if (localStorage.length > 0) {
    localRender();
  } else {
    render();
  }
};
const swap = (firstId, secondId) => {
  const firstObject = listItems.find((ele) => ele.id === Number(firstId));
  const secondObject = listItems.find((ele) => ele.id === Number(secondId));
  const tempIndex = firstObject.index;
  firstObject.index = secondObject.index;
  secondObject.index = tempIndex;
  localRender();
};

localRender();

export { listItems, swap, swapLocal, localStorageList, inputBox };
