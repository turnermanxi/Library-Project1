let myLibrary {
    
 
constructor(title, author, pages, read) { 
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read,
    this.sayRead = () => {
            if (read === "no") {
            return title + "," + author + "," + pages + "pages," + "not read"; 
        };  if (read === "yes") {
            return title + "," + author + "," + pages + "pages," + "has read";
        };
    };
    this.getInfo = () => {
        return (title + author + pages + "pages");
    }
  }
};

class Book extends myLibrary {
    title = `${this.title}`;
    author = `${this.author}`;
    pages = `${this.pages}`;
    read = `${this.read}`;

}
Object.getPrototypeOf(Book) === myLibrary

Book.prototype.toggleRead = () => {
    this.read = this.read === "read" ? "unread" : "read";
      }

Object.getPrototypeOf(Book.prototype) === myLibrary.prototype


const book1 = new Book("Harry Potter", "cuntbitch", 320, "pages", "no");
const book2 = new Book("It", "Steven King", 250, "pages", "yes");
    
book1.sayRead();
let cardsContainer;

myLibrary.push(book1, book2)




class displayLibrary extends myLibrary.array.forEach((book, index) => {
    
    cardsContainer = document.querySelector(".container");

        const bookCard = document.createElement("div");
        bookCard.classList.add("book-card");

        let trashBtn = document.createElement("div");
        trashBtn.classList.add("trash-icon");
        
        trashBtn.dataset.arrayIndex = `${index}`;

        let bookIndex = trashBtn.dataset.arrayIndex;

        bookCard.appendChild(trashBtn);

        const titlePart = document.createElement("div");
        titlePart.textContent = book.title;
        // Make a selector for css
        titlePart.classList.add("title-part");
        bookCard.appendChild(titlePart);

        const authorPart = document.createElement("div");
        authorPart.textContent = book.author;
        authorPart.classList.add("author-part");
        bookCard.appendChild(authorPart);

        const pagesPart = document.createElement("div");
        pagesPart.textContent = `${book.pages} pages`;
        pagesPart.classList.add("pages-part");
        bookCard.appendChild(pagesPart);

        const readPart = document.createElement("div");
        readPart.textContent = book.read === "read" ? "Completed this book": "Not read this book";
        readPart.classList.add("read-part");
        bookCard.appendChild(readPart);

        cardsContainer.appendChild(bookCard);

        const rbCardsContainer = () => {
            cardsContainer.textContent = "";
            displayLibrary();
        }

        trashBtn.addEventListener("click", () => {

            console.log(bookIndex);
            myLibrary.splice(bookIndex, 1);

            rbCardsContainer();
            console.log(myLibrary);
        });

        // creates a togglebutton for read status

        const tgleBtn = document.createElement("button");
        tgleBtn.textContent = book.read === "read" ? "Read" : "Unread";
        book.read === "read" ? tgleBtn.classList.add("read-btn") : tgleBtn.classList.add("unread-btn")
        tgleBtn.classList.add("tgle-btn");
        bookCard.appendChild(tgleBtn);

        tgleBtn.addEventListener("click", ()=> {
            book.toggleRead();
            console.log (myLibrary);
            rbCardsContainer();
        });
        displayLibrary();
})
// logs the displayLibrary function
class addBooktoLibrary extends myLibrary((book, index){

    let inputArray = [];

    [].map;

    const dialogBtn = document.querySelector("#dialogBtn");
    const inputForm = document.querySelector("#inputForm");
    const confirmBtn = document.querySelector("#confirmBtn");
    const cancelBtn = document.querySelector("#cancelBtn");
    const dialogBox = document.querySelector("#dialogBox");
    dialogBox.returnValue = "initialValue";
    confirmBtn.value = "userInputted";

    // get dialog to show

    dialogBtn.addEventListener(("click"), () => {
        inputForm.reset();
        dialogBox.showModal();
    });

    const titlePlace = document.querySelector("#title");
    let titlePlaceValue;
    titlePlace.setCustomValidity('');

    const authorPlace = document.querySelector("#author");
    let authorPlaceValue;

    const pagesPlace = document.querySelector("#pages");
    let pagesPlaceValue;

    // get dialog box to close

    dialogBox.addEventListener("close", (e) => {
        if (dialogBox.returnValue === "userInputted") {
            titlePlaceValue = titlePlace.value;
            authorPlaceValue = authorPlace.value;
            pagesPlaceValue = parseInt(pagesPlace.value);
            let selectReadStatus = document.querySelector('input[name=read-status]:checked').value;

            inputArray.push(titlePlaceValue, authorPlaceValue, pagesPlaceValue, selectReadStatus);
            console.log(inputArray[0])

            let userBook = new Book (inputArray[0], inputArray[1], inputArray[2], inputArray[3]);
            console.log(inputArray[0]);
            inputArray = [];
            myLibrary.push(userBook);
            cardsContainer.textContent = "";
            dialogBox.returnValue = "initialValue";
            displayLibrary();

            console.log(myLibrary);

            console.log(dialogBox.returnValue);
        }else {
                console.log(dialogBox.returnValue)
                return;
            }
        });

        confirmBtn.addEventListener("click", () => {
            if (titlePlace.checkValidity() && authorPlace.checkValidity() && pagesPlace.checkValidity()) {
                event.preventDefault();
                dialogBox.close(confirmBtn.value);
            }
            else {
                return;
            }
        });

        cancelBtn.addEventListener("click", () => {
            dialogBox.close();
        })

        console.log(myLibrary);
        return myLibrary;
    });

    


    addBooktoLibrary()












