/* eslint-disable */

import { listItems } from './list.js';
// ...............................
export const addCheck = () => {
  const listElemenets = document.querySelectorAll('.list');
  listElemenets.forEach((element) => {
    const checked = element.children[0].children[0];
    checked.addEventListener('change', () => {
      const arrObject = listItems.find((ele) => ele.id === Number(element.id));
      arrObject.completed = !arrObject.completed;
      if (arrObject.completed) {
        element.classList.add('checked');
      } else {
        element.classList.remove('checked');
      }
    });
  });
};
