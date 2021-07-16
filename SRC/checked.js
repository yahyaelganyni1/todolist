import { listItems, listElemenet, theList } from './list';
const checkbox = document.querySelectorAll('.checkbox');
const list = document.querySelectorAll('.list');

checkbox.forEach((element) => {
  element.addEventListener('change', (e) => {
    e.target.nextElementSibling.classList.toggle('checked');
  });
});
