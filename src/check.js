/* eslint-disable */

import { listItems, localStorageList } from './list.js';
// ...............................
const addChecklocal = () => {
  const listElemenets = document.querySelectorAll('.list');
  listElemenets.forEach((element) => {
    const checked = element.children[0].children[0];
    checked.addEventListener('change', () => {
      const arrObject = localStorageList.find(
        (ele) => ele.id === Number(element.id)
      );
      arrObject.completed = !arrObject.completed;
      if (arrObject.completed) {
        element.classList.add('checked');
      } else {
        element.classList.remove('checked');
      }
      localStorage.setItem('list', JSON.stringify(listItems));
    });
  });
};
const addCheck = () => {
  const listElemenets = document.querySelectorAll('.list');
  listElemenets.forEach((element) => {
    const checked = element.children[0].children[0];
    checked.addEventListener('change', () => {
      const arrObject = listItems.find(
        (ele) => ele.index === Number(element.id)
      );
      arrObject.completed = !arrObject.completed;
      if (arrObject.completed) {
        element.classList.add('checked');
      } else {
        element.classList.remove('checked');
      }
      localStorage.setItem('list', JSON.stringify(listItems));
    });
  });
};

export { addCheck, addChecklocal };
