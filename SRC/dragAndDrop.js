/* eslint-disable */
import { swap, listItems, swapLocal } from './list.js';
// ...............................
export const addActionListner = () => {
  const listElemenets = document.querySelectorAll('.list');
  listElemenets.forEach((element) => {
    element.addEventListener('dragstart', (e) => {
      element.classList.add('ondrag');
      e.dataTransfer.effectAllowed = 'move';
      e.dataTransfer.setData('id', element.id);
    });
    element.addEventListener('drop', (e) => {
      e.preventDefault();
      e.dataTransfer.effectAllowed = 'move';
      const fristId = e.dataTransfer.getData('id');
      const secondId = element.id;
      localStorage.setItem('list', JSON.stringify(listItems));
      if (localStorage.length > 0) {
        swapLocal(fristId, secondId);
      } else {
        swap(fristId, secondId);
      }
      localStorage.setItem('list', JSON.stringify(listItems));
    });
    element.addEventListener('dragend', () => {
      element.classList.remove('ondrag');
    });
    element.addEventListener('dragover', (e) => {
      e.preventDefault();
    });
  });
};
