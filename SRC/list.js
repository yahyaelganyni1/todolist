import { mz } from './dragAndDrop';

const theList = document.querySelector('.the-list');

const listItems = [
  {
    id: 0,
    description: 'do stuff 1',
    completed: false,
    index: 2,
  },
  {
    id: 1,
    description: 'do stuff 2',
    completed: true,
    index: 3,
  },
  {
    id: 2,
    description: 'do stuff 3',
    completed: false,
    index: 0,
  },
  {
    id: 3,
    description: 'do stuff 4',
    completed: false,
    index: 1,
  },
];

// creat list element

const renderListElemenet = (description, completed, id) => {
  const li = document.createElement('li');
  li.id = id;
  li.classList.add('list');
  li.setAttribute('draggable', 'true');
  const text = document.createElement('p');
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

const swap = (firstId, secondId) => {
  const firstObject = listItems.find((ele) => ele.id === Number(firstId));
  const secondObject = listItems.find((ele) => ele.id === Number(secondId));

  console.log('brfore', listItems);

  let tempIndex = firstObject.index;
  console.log(
    'temp',
    tempIndex,
    'findex',
    firstObject.index,
    'sindex',
    secondObject.index
  );

  firstObject.index = secondObject.index;
  secondObject.index = tempIndex;
  console.log(
    'temp',
    tempIndex,
    'findex',
    firstObject.index,
    'sindex',
    secondObject.index
  );

  console.log('after', listItems);
  render();
};

const render = () => {
  console.log('renderd...');
  theList.innerHTML = '';
  listItems
    .sort((a, b) => a.index - b.index)
    .forEach((item) => {
      renderListElemenet(item.description, item.completed, item.id);
    });

  // addActionListner();
};

mz();
render();

export { listItems, renderListElemenet, theList, swap };
