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
        row.innerHTML =		'<td>' +book.title+ '</td>';
        row.innerHTML +=	'<td>' +book.author+ '</td>';
        row.innerHTML += '<td>'+book.isbn+ '</td>';
        row.innerHTML +=	"<a href='#' class='btn btn-danger btn-sm delete'>X</a>";
        list.appendChild(row);
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

    const book = new Book(title, author, isbn);
    console.log(book);

    // Add book to UI table
    UI.addBookToList(book);


    
});