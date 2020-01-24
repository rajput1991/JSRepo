class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}
class UI {
    static displayBooks() {
        const storeBooks = [

            {
                title: 'Book one',
                author: 'Rahul',
                isbn: 34649949

            },
            {
                title: 'Book Two',
                author: 'Rana',
                isbn: 249485949

            }
        ]
        const books = storeBooks;
        books.forEach(book => UI.addBookToList(book));


    }
    static addBookToList(book) {

        const list = document.querySelector("#book-list");
        const row = document.createElement("tr");
        row.innerHTML = '<td>' + book.title + '</td>';
        row.innerHTML += '<td>' + book.author + '</td>';
        row.innerHTML += '<td>' + book.isbn + '</td>';
        row.innerHTML += "<a href='#' class='btn btn-danger btn-sm delete'>X</a>";
        list.appendChild(row);
    }

    static showAlert(message, className) {
      //  <div class="alert alert-danger">Message to display</div> Implementation of this is below
        const div = document.createElement('div');
        // className can be danger(red), success(green) or info(blue)
        div.className = 'alert alert-' + className;
        div.appendChild(document.createTextNode(message));
        // container is parent element
        const container = document.querySelector('.container');
        const form = document.querySelector('#book-form');
        container.insertBefore(div, form);
        // vanish alert  in 3 sec because if you click on add book multiple times, many alerts comes in UI
        setTimeout(() => {
            document.querySelector('.alert').remove();
            
        }, 3000);

    }
    static clearFields() {
        document.querySelector('#title').value = '';
        document.querySelector('#author').value = '';
        document.querySelector('#isbn').value = '';
    }
    static deleteBook(el) {
        if (el.classList.contains('delete')) {
            el.parentElement.remove();

        }
    }
}


// Display Books
document.addEventListener("DOMContentLoaded", UI.displayBooks);


// Adding a Book : Event Handling
document.querySelector('#book-form').addEventListener('submit', (e) => {

    // Prevent default submit , else book wont be logged on console.
    e.preventDefault();
    // Get form values
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const isbn = document.querySelector('#isbn').value;

    if (title == '' || author == '' || isbn == '') {
       // alert("Please fill in all fields");
        UI.showAlert('Please fill all the fields', 'danger');
    }
    else {

        const book = new Book(title, author, isbn);
        console.log(book);

        // Add book to UI table, but it will go over reload because its not persisted
        UI.addBookToList(book);

        // show success message
        UI.showAlert('Book Added', 'success');

        // CLearing Fields once we click on Add button
        UI.clearFields();
    }


});

// Removing a Book , Event handling
document.querySelector('#book-list').addEventListener('click', (e) => {
    console.log(e.target);
    UI.deleteBook(e.target);

});