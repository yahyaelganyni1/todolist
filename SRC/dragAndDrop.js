import { listItems, listElemenet, theList } from './list';
const list = document.querySelectorAll('.list');

list.forEach((element, index) => {
  const position = element.getBoundingClientRect();
  const yTop = position.top;
  const yBottom = position.bottom;
  let yCenter = yTop + (yBottom - yTop) / 2;
  console.log(yCenter);
  element.addEventListener('dragstart', (e) => {
    element.classList.add('ondrag');
    console.log(element.innerText);
    e.dataTransfer.setData = element.innerText;
    console.log(e.dataTransfer);
  });
  element.addEventListener('dragend', () => {
    element.classList.remove('ondrag');
  });
  element.addEventListener('drop', (e) => {
    console.log(element.innerText);

    e.dataTransfer.setData = element.innerText;
    console.log(e.dataTransfer);
  });
  element.addEventListener('dragover', (e) => {
    e.preventDefault();
  });
});
