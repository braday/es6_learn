class Book {
  
  // Field <-- Java way
  // [type] Book (title, author, isbn) {...} <-- Java constructor
  
  constructor(title, author, isbn){
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

class UI {
  addBookToList(book){
    const list = document.getElementById('book-list');

    // CREATE tr EL
    const row = document.createElement('tr');

    row.innerHTML = `<td>${book.title}</td>
                   <td>${book.author}</td>
                   <td>${book.isbn}</td>
                   <td><a href="#" class="delete">X</a></td>
    `;

    list.appendChild(row);
  }

  showAlert(msg, className){
    const div = document.createElement('div');

    // Add classes
    div.className = `alert ${className}`;

    // ADD txt
    div.appendChild(document.createTextNode(msg));

    // GET PARENT
    const container = document.querySelector('.container');

    const form = document.querySelector('#book-form');

    // INSERT ALERT
    container.insertBefore(div, form);

    // SET TIMEOUT
    setTimeout(() => {
      document.querySelector('.alert').remove();
    }, 2000);
  }

  deleteBook(target){
    if (target.className === 'delete') {
      target.parentElement.parentElement.remove();
    }
  }

  clearField(){
    document.getElementById('book-form').reset();
  }

  // console.log();
} // END OF Class UI

class Store {
  // getBooks() - Get data from local storage
  static getBooks(){
    let books;
    
    if(localStorage.getItem('books') === null){
      books = [];
    }
    else{
      books = JSON.parse(localStorage.getItem('books'));
    }

    return books;
  }
  
  static displayBooks(){
    const books = Store.getBooks();
    
    books.forEach(function(book) {
      const ui = new UI;

      // Add book to UI
      ui.addBookToList(book);
    });
  }

  static addBook(book){
    const books = Store.getBooks();

    books.push(book);

    // Add to local storage
    localStorage.setItem('books', JSON.stringify(books));
  }

  static removeBook(){}
}

// DOM Load Event
document.addEventListener('DOMContentLoaded', Store.displayBooks);

// EVENT LISTENER FOR ADD BOOK
document.getElementById('book-form').addEventListener('submit', function (e) {

  // GET USER INPUT VALUE
  const title = document.getElementById('title').value,
    author = document.getElementById('author').value,
    isbn = document.getElementById('isbn').value;

  // Instantiate book
  const book = new Book(title, author, isbn);

  // Instantiate UI
  const ui = new UI();

  // Validate 
  if (title === '' || author === '' || isbn === '') {
    ui.showAlert('Please fill something', 'error');
  }
  else {
    // ADD BOOK TO LIST
    ui.addBookToList(book);

    // ADD to LS
    Store.addBook(book);

    ui.showAlert('Book Added', 'success');

    // Clear Fields
    ui.clearField();
  }

  e.preventDefault();
});

// EVENT LISTENER FOR DELETE BOOK LIST
document.getElementById('book-list').addEventListener('click', function (e) {

  const ui = new UI();

  ui.deleteBook(e.target);

  // Show Msg
  ui.showAlert('Book Removed', 'success');

  e.preventDefault();
});

 //console.log()