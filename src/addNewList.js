import { listItems } from './list.js';
const theList = document.querySelector('.the-list');
const inputBox = document.querySelector('.input-box');
const icons = document.querySelectorAll('li i');

export class List {
  constructor(description, completed, index) {
    this.description = description;
    this.completed = completed;
    this.index = index;
  }
  renderListElemenet() {
    const li = document.createElement('li');
    li.id = this.index;
    li.classList.add('list');
    li.setAttribute('draggable', 'true');
    if (this.completed) li.classList.add('checked');
    const text = document.createElement('p');
    text.classList.add('text');
    const moreIcon = document.createElement('i');
    moreIcon.classList.add('icons');

    const div = document.createElement('div');
    text.innerHTML = this.description;
    text.setAttribute('contenteditable', true);
    text.addEventListener('focusout', (e) => {
      console.log('object');
      listItems[this.index - 1].description = text.innerHTML;
      localStorage.setItem('list', JSON.stringify(listItems));
    });
    const checbox = document.createElement('input');
    checbox.setAttribute('type', 'checkbox');
    checbox.classList.add('checkbox');
    moreIcon.setAttribute('class', 'fas fa-trash');
    checbox.checked = this.completed;
    div.appendChild(checbox);
    div.appendChild(text);
    li.appendChild(div);
    li.appendChild(moreIcon);
    theList.appendChild(li);
    inputBox.value = '';
  }
}
