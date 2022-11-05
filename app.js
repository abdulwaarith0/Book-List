// Book Constructor
class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}


// UI Constructor
class UI {
    constructor(params) {
    }
    // Add book to List
    addBookList(book) {
        // console.log(book);
        const list = document.querySelector("#book-list");

        // Create tr element
        const row = document.createElement("tr");
        // Insert Calls
        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td><a href="#" class="delete">X</a></td>

        ` ;

        list.appendChild(row);

        UI.prototype.clearFields = function () {
            document.querySelector("#title").value = "";
            document.querySelector("#author").value = "";
            document.querySelector("#isbn").value = "";

        }
    
    };
};


// Event Listeners
document.querySelector("#book-form").addEventListener("submit", 
function (e) {
    const title = document.querySelector("#title").value,
          author = document.querySelector("#author").value,
          isbn = document.querySelector("#isbn").value;


    const book = new Book (title, author, isbn);

    // Instantiate UI Object
    const ui = new UI();

    ui.addBookList(book);

    ui.clearFields();

        //   console.log(book);

    e.preventDefault();
});