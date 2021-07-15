import { listItems, listElemenet, theList } from './list';
const list = document.querySelectorAll('.list');

list.forEach((element, index) => {
  element.addEventListener('dragstart', (e) => {
    element.classList.add('ondrag');

    e.dataTransfer.effectAllowed = 'move';

    e.dataTransfer.setData('text/html', element.innerHTML);
    console.log(e.dataTransfer), 'drag start';
  });

  element.addEventListener('drop', (e) => {
    e.preventDefault();
    element.innerHTML = e.dataTransfer.getData('text/html');
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text', element.innerHTML);
    console.log(e.dataTransfer, 'drag droped');
  });

  element.addEventListener('dragend', (e) => {
    element.classList.remove('ondrag');
    element.innerHTML = e.dataTransfer.getData('text');

    console.log(e.dataTransfer), 'drag end ';
  });
  element.addEventListener('dragover', (e) => {
    e.preventDefault();
  });
});
