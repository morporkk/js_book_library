let uniqueID = 0;
let myLibrary = [{title: "The Willows", author: "Algernon Blackwood" },
                 {title: "The Wine-Dark Sea", author: "Robert Aickman"}];

let addButton = document.getElementById('add-btn');
addButton.addEventListener('click', createBook, false);
addButton.addEventListener('click', (event) => { event.preventDefault() } )
addButton.addEventListener('click', toggle, false);

function toggle() {
  let modal = document.querySelector('.w3-modal');
  modal.style.display = 'none';
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

class Book {
  constructor(title, author) {
    this.id = ++uniqueID;
    this.title  = title;
    this.author = author;
  }
}

function addBookToLibrary(book) {
  myLibrary.push(book)
}

function render() {
  let bookContainer = document.querySelector('.library-container')
    myLibrary.forEach(book => {
      let li = document.createElement('p');
      li.textContent = `${book.title} | ${book.author}`;
      bookContainer.appendChild(li);
  });
}

function renderSingle(book) {
  let bookContainer = document.querySelector('.library-container')
  let li = document.createElement('p');
  li.textContent = `${book.title} | ${book.author}`;
  bookContainer.appendChild(li);
}

render(myLibrary);