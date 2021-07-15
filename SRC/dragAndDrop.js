import { listItems, listElemenet, theList } from './list';
const list = document.querySelectorAll('.list');
list.forEach((element) => {
  let secondItem;
  element.addEventListener('dragstart', (e) => {
    element.classList.add('ondrag');
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('firstItem', element.innerHTML);
    e.dataTransfer.setData('firstItemId', element.id);
  });
  element.addEventListener('drop', (e) => {
    e.preventDefault();
    e.dataTransfer.effectAllowed = 'move';
    secondItem = element.innerHTML;
    element.innerHTML = e.dataTransfer.getData('firstItem');
    document.getElementById(e.dataTransfer.getData('firstItemId')).innerHTML =
      secondItem;
  });
  element.addEventListener('dragend', (e) => {
    element.classList.remove('ondrag');
  });
  element.addEventListener('dragover', (e) => {
    e.preventDefault();
  });
});
