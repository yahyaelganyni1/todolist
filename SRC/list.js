/* eslint-disable */

import { addActionListner } from './dragAndDrop.js';
import { addCheck, addChecklocal } from './check.js';

const theList = document.querySelector('.the-list');

let listItems = [];

if (localStorage.length < 1) {
  listItems = [
    {
      id: 0,
      description: 'do stuff 1',
      completed: false,
      index: 0,
    },
    {
      id: 1,
      description: 'do stuff 2',
      completed: false,
      index: 1,
    },
    {
      id: 2,
      description: 'do stuff 3',
      completed: false,
      index: 2,
    },
    {
      id: 3,
      description: 'do stuff 4',
      completed: false,
      index: 3,
    },
  ];
  localStorage.setItem('list', JSON.stringify(listItems));
} else {
  listItems = JSON.parse(localStorage.getItem('list'));
}

// creat list element
const renderListElemenet = (description, completed, id) => {
  const li = document.createElement('li');
  li.id = id;
  li.classList.add('list');
  li.setAttribute('draggable', 'true');
  if (completed) li.classList.add('checked');
  const text = document.createElement('p');
  text.classList.add('text');
  const moreIcon = document.createElement('i');
  const div = document.createElement('div');
  text.innerHTML = description;
  const checbox = document.createElement('input');
  checbox.setAttribute('type', 'checkbox');
  checbox.classList.add('checkbox');
  moreIcon.setAttribute('class', 'fas fa-ellipsis-v');
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
      renderListElemenet(item.description, item.completed, item.id);
    });

  addActionListner();
  if (localStorage > 0) {
    addChecklocal();
  } else {
    addCheck();
  }
};

const render = () => {
  theList.innerHTML = '';
  listItems
    .sort((a, b) => a.index - b.index)
    .forEach((item) => {
      renderListElemenet(item.description, item.completed, item.id);
    });

  addActionListner();
  addActionListner();
  if (localStorage > 0) {
    addChecklocal();
  } else {
    addCheck();
  }
};

const swapLocal = (firstId, secondId) => {
  localStorageList = JSON.parse(localStorage.getItem('list'));
  debugger;
  const firstObject = localStorageList.find(
    (ele) => ele.id === Number(firstId)
  );
  const secondObject = localStorageList.find(
    (ele) => ele.id === Number(secondId)
  );

  const tempIndex = firstObject.index;

  debugger;
  console.log(listItems);

  let tempId = listItems[tempIndex].id;
  let tempDesc = listItems[tempIndex].description;
  let tempCompl = listItems[tempIndex].completed;
  // let tempInd = listItems[firstId].index;

  listItems[tempIndex].id = listItems[secondObject.index].id;
  listItems[tempIndex].description = listItems[secondObject.index].description;
  listItems[tempIndex].completed = listItems[secondObject.index].completed;
  // listItems[firstId].index = listItems[secondId].index;

  listItems[secondObject.index].id = tempId;
  listItems[secondObject.index].description = tempDesc;
  listItems[secondObject.index].completed = tempCompl;
  // listItems[secondId].index = tempInd;

  // debugger;
  console.log(listItems);

  localStorage.setItem('list', JSON.stringify(listItems));
  localStorageList = JSON.parse(localStorage.getItem('list'));

  firstObject.index = secondObject.index;
  secondObject.index = tempIndex;

  if (localStorage.length > 0) {
    localRender();
  } else {
    render();
  }
};
const swap = (firstId, secondId) => {
  // localStorageList = JSON.parse(localStorage.getItem('list'));
  const firstObject = listItems.find((ele) => ele.id === Number(firstId));
  const secondObject = listItems.find((ele) => ele.id === Number(secondId));
  console.log(firstObject);
  const tempIndex = firstObject.index;
  firstObject.index = secondObject.index;
  secondObject.index = tempIndex;
  if (localStorage.length > 0) {
    localRender();
  } else {
    render();
  }
};

if (localStorage.length > 0) {
  localRender();
} else {
  render();
}

export { listItems, swap, swapLocal, localStorageList };
