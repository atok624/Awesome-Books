/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
/* eslint-disable max-classes-per-file */

class Book {
  constructor(title, author) {
    this.bookId = Math.random().toFixed(1);
    this.title = title;
    this.author = author;
  }
}

class Library {
  constructor() {
    this.books = [];
  }

  addBook(item) {
    this.books.push(item);
    localStorage.setItem('Added Books', JSON.stringify(this.books));
    Display(item);
  }

  removeBook(bookId) {
    const rm = document.getElementById(bookId);
    rm.remove();
    this.books = this.books.filter((x) => x.bookId !== bookId);
    localStorage.setItem('Added Books', JSON.stringify(this.books));
  }
}

const storeBook = new Library();
// checking if local storage is empty than add an empty array
// if (localStorage.getItem('Added Books') == null) {
//   localStorage.setItem('Added Books', JSON.stringify([]));
// }

// // Store data into local storage
// const storeData = JSON.parse(localStorage.getItem('Added Books'));

// function updateData() {
//   localStorage.setItem('Added Books', JSON.stringify(storeData));
// }

// Getting values from input fields and adding them
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  const title = document.querySelector('.title');
  const author = document.querySelector('.author');
  e.preventDefault();
  const newItem = new Book(title.value, author.value);
  storeBook.addBook(newItem);
});

function Display(item) {
  const container = document.querySelector('.container');
  const ul = document.querySelector('.bookShelfe');
  const li = document.createElement('li');
  li.classList.add('book');
  li.setAttribute('id', item.bookId);
  li.innerHTML = `"${item.title}" by ${item.author}`;
  const rmbtn = document.createElement('button');
  rmbtn.innerHTML = 'Remove';
  rmbtn.setAttribute('id', 'removebtn');
  rmbtn.addEventListener('click', () => storeBook.removeBook(item.bookId));
  li.appendChild(rmbtn);
  ul.appendChild(li);
}

window.onload = () => {
  storeBook.books = JSON.parse(localStorage.getItem('Added Books' || '[]'));
  if (storeBook.books === null) {
    storeBook.books = [];
    return;
  }
  storeBook.books.forEach((item) => Display(item));
  const live = () => {
    const date = document.getElementById('date');
    date.innerHTML = Date().slice(0, 25);
  };
  setInterval(live, 1000);
};

const list = document.querySelector('.List');
const add = document.querySelector('.add-new');
const contact = document.querySelector('.contact');
const listLink = document.getElementById('l-link');
const addLink = document.getElementById('a-link');
const contactLink = document.getElementById('c-link');

listLink.addEventListener('click', () => {
  list.style.display = 'block';
  contact.style.display = 'none';
  add.style.display = 'none';
});
addLink.addEventListener('click', () => {
  add.style.display = 'block';
  contact.style.display = 'none';
  list.style.display = 'none';
});
contactLink.addEventListener('click', () => {
  add.style.display = 'none';
  contact.style.display = 'flex';
  list.style.display = 'none';
});
