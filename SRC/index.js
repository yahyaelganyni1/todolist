import _ from 'lodash';

import './style.css';

const theList = document.querySelector('.the-list');

const listItem = [
  {
    description: 'do stuff 1',
    completed: false,
    index: 0,
  },
  {
    description: 'do stuff 2',
    completed: false,
    index: 1,
  },
  {
    description: 'do stuff 3',
    completed: false,
    index: 2,
  },
  {
    description: 'do stuff 4',
    completed: false,
    index: 3,
  },
];

// creat list element

const listElemenet = (description, completed) => {
  const li = document.createElement('li');
  const text = document.createElement('p');
  text.innerHTML = description;
  const checbox = document.createElement('input');
  checbox.setAttribute('type', 'checkbox');
  checbox.checked = completed;
  li.appendChild(checbox);
  li.appendChild(text);
  theList.appendChild(li);
};

listItem.forEach((item) => {
  listElemenet(item.description, item.completed);
});
