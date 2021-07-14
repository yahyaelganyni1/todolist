import './style.css';
const theList = document.querySelector('.the-list');

const listItem = [
  {
    description: 'do stuff 11',
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
  const moreIcon = document.createElement('i');
  const div = document.createElement('div');
  text.innerHTML = description;
  const checbox = document.createElement('input');
  checbox.setAttribute('type', 'checkbox');
  moreIcon.setAttribute('class', 'fas fa-ellipsis-v');
  checbox.checked = completed;
  div.appendChild(checbox);
  div.appendChild(text);
  li.appendChild(div);
  li.appendChild(moreIcon);
  theList.appendChild(li);
};

listItem.forEach((item) => {
  listElemenet(item.description, item.completed);
});
