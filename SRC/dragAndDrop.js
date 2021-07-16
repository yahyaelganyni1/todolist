import { listItems, listElemenet, theList, swap } from './list';
// ...............................
export const addActionListner = () => {
  let checkbox = document.querySelectorAll('.checkbox');
  let listElemenets = document.querySelectorAll('.list');
  console.log(checkbox);
  listElemenets.forEach((element) => {
    element.addEventListener('dragstart', (e) => {
      element.classList.add('ondrag');
      e.dataTransfer.effectAllowed = 'move';
      e.dataTransfer.setData('id', element.id);
    });
    element.addEventListener('drop', (e) => {
      e.preventDefault();
      e.dataTransfer.effectAllowed = 'move';
      let fristId = e.dataTransfer.getData('id');
      let secondId = element.id;
      swap(fristId, secondId);
    });
    element.addEventListener('dragend', () => {
      element.classList.remove('ondrag');
    });
    element.addEventListener('dragover', (e) => {
      e.preventDefault();
    });
    let checked = element.children[0].children[0];
    checked.addEventListener('change', (e) => {
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
