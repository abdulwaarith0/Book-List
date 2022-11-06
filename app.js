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

        };

    };
};

//  ShowAlert
UI.prototype.showAlert = function (message, className) {
    // Create DIV
    const div = document.createElement("div");
    div.className = `alert ${className}`;
    div.appendChild(document.createTextNode(message));

    const container = document.querySelector(".container");

    const form = document.querySelector("#book-form");

    container.insertBefore(div, form);

    setTimeout(function () {
        document.querySelector(".alert").remove();
    }, 3000);
};

// Delete Book
UI.prototype.deleteBook = function (target) {
    if (target.className === "delete") {
        target.parentElement.parentElement.remove();
    };
};

// Event Listeners for books
document.querySelector("#book-form").addEventListener("submit",
    function (e) {
        const title = document.querySelector("#title").value,
            author = document.querySelector("#author").value,
            isbn = document.querySelector("#isbn").value;


        const book = new Book(title, author, isbn);

        // Instantiate UI Object
        const ui = new UI();

        // Validate
        if (title === "" || author === "" || isbn === "") {
            // Error Alert
            ui.showAlert("Please fill in all fields", 'error')
        } else {

            ui.addBookList(book);

            ui.showAlert("Book Added Successfully !!!", "success")

            ui.clearFields();

        }

        //   console.log(book);

        e.preventDefault();
    });

// Event Listeners for delete
document.querySelector("#book-list").addEventListener("click",
    function (e) {
        const ui = new UI();

        ui.deleteBook(e.target);
        // SowAlert
        ui.showAlert("Book removed", "success");

        e.preventDefault()
    });