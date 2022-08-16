import Display from "./display.js";
import { displayDiv } from "./field-data.js";

class Removebook {
  remove(id) {
    let books = [];
    let contentDiv;
    const displayBook = new Display();
    books = JSON.parse(localStorage.getItem("booksInfo"));
    books.splice(id, 1);
    localStorage.setItem("booksInfo", JSON.stringify(books));
    contentDiv = "";
    displayDiv.innerHTML = contentDiv;
    displayBook.display();
  }
}

export default Removebook;
