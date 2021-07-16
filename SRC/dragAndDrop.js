import { listItems, listElemenet, theList, swap } from './list';
const listElemenets = document.querySelectorAll('.list');

// const addActionListner = () => {
//   console.log('add actions');
//   listElemenets.forEach((element) => {
//     element.addEventListener('dragstart', (e) => {
//       element.classList.add('ondrag');
//       e.dataTransfer.effectAllowed = 'move';
//       e.dataTransfer.setData('id', element.id);
//       console.log('drag', element.id);
//     });
//     element.addEventListener('drop', (e) => {
//       e.preventDefault();
//       e.dataTransfer.effectAllowed = 'move';
//       let fristId = e.dataTransfer.getData('id');
//       let secondId = element.id;
//       console.log(fristId, secondId);
//       swap(fristId, secondId);
//     });
//     element.addEventListener('dragend', () => {
//       element.classList.remove('ondrag');
//     });
//     element.addEventListener('dragover', (e) => {
//       e.preventDefault();
//     });
//   });
// };

export const mz = () => {
  console.log('xx');
};
