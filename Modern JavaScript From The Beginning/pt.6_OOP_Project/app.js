// Book Constructor
function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

// UI Constructor
function UI() {}

// ADD BOOK TO LIST
UI.prototype.addBookToList = function(book) {
  console.log(book);

  const list = document.getElementById('book-list');

  // CREATE tr EL
  const row = document.createElement('tr');

  row.innerHTML = `<td>${book.title}</td>
                   <td>${book.author}</td>
                   <td>${book.isbn}</td>
                   <td><a href="#" class="delete">X</a></td>
  `;

  list.appendChild(row);
};

// SHOW ALERT
UI.prototype.showAlert = function(msg, paraClassName){
  const div = document.createElement('div');

  // Add classes
  div.className = `alert ${paraClassName}`;

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

// DELETE BOOK
UI.prototype.deleteBook = function (target) {
  if(target.className === 'delete') {
    target.parentElement.parentElement.remove();
  }
}


// CLEAR FIELDS 
UI.prototype.clearFields = function(){
  document.getElementById('book-form').reset();
  // document.getElementById('author').value = '';
  // document.getElementById('isbn').value = '';
};


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
    ui.showAlert('Please fill something','error');
  }
  else{
    // ADD BOOK TO LIST
    ui.addBookToList(book);

    ui.showAlert('Book Added', 'success');

    // Clear Fields
    ui.clearFields();
  }

  e.preventDefault();
});

// EVENT LISTENER FOR DELETE BOOK LIST
document.getElementById('book-list').addEventListener('click', function(e){
  
  const ui = new UI();

  ui.deleteBook(e.target);

  // Show Msg
  ui.showAlert('Book Removed', 'success');

  e.preventDefault();  
});

 //console.log()