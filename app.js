let uniqueID = 0;
let myLibrary = [{title: "The Willows", author: "Algernon Blackwood" },
                 {title: "The Wine-Dark Sea", author: "Robert Aickman"}];



class Book {
  constructor(title, author) {
    this.id = ++uniqueID;
    this.title  = title;
    this.author = author;
  }
}



function createBook() {
  book = getFormValues();
  addBookToLibrary(book);
  renderSingle(book);
}

function getFormValues() {
  let title = document.getElementById('title').value;
  let author = document.getElementById('author').value;
  return {title, author};
}

function addBookToLibrary(book) {
  myLibrary.push(book)
}

function render() {
  let bookContainer = document.querySelector('.books-container')
    myLibrary.forEach(book => {
      let bookItem = createBookItem(book);
      bookContainer.appendChild(bookItem);
  });
}

function renderSingle(book) {
  let bookContainer = document.querySelector('.books-container')

  bookItem = createBookItem(book)
  bookContainer.appendChild(bookItem)
}

function createBookItem(book) {
  let bookItem = document.createElement('div');
  bookItem.classList.add('book');
  let title = document.createElement('h4');
  title.classList.add('book-title');
  title.textContent = book.title;
  let author = document.createElement('h5');
  author.classList.add('book-author');
  author.textContent = book.author;
  
  let buttons = makeBookButtons();
  
  bookItem.appendChild(title);
  bookItem.appendChild(author);
  bookItem.appendChild(buttons);
  return bookItem;
}

function makeBookButtons() {
  let buttons = document.createElement('div');
  buttons.classList.add('buttons');

  let deleteBtn = document.createElement('button');
  deleteBtn.classList.add('delete-btn');
  deleteBtn.textContent = "Delete";
  deleteBtn.addEventListener('click', () => {});
  buttons.appendChild(deleteBtn);

  let editBtn = document.createElement('button');
  editBtn.classList.add('edit-btn');
  editBtn.textContent = "Edit";
  editBtn.addEventListener('click', () => {});
  buttons.appendChild(editBtn);

  return buttons;
}

let addButton = document.getElementById('add-btn');
addButton.addEventListener('click', createBook, false);
addButton.addEventListener('click', (event) => { event.preventDefault() } )
addButton.addEventListener('click', toggle, false);

function toggle() {
  let modal = document.querySelector('.w3-modal');
  modal.style.display = 'none';
}

render(myLibrary);