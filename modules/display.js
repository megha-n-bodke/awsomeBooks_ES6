import { displayDiv } from "./field-data.js";
import Removebook from "./removeBook.js";

class Display {
  /* display  localstorage data */

  display() {
    let books = [];
    let contentDiv;
    if (localStorage.getItem("booksInfo")) {
      books = JSON.parse(localStorage.getItem("booksInfo"));
    } else {
      alert("in else block");
      localStorage.setItem("booksInfo", JSON.stringify(books));
    }

    books.map((singlebook, index) => {
      const { title, author } = singlebook;
      const dataDiv = document.createElement("div");
      const para = document.createElement("p");
      const removeBtn = document.createElement("button");
      removeBtn.innerText = "Remove";

      dataDiv.className = "data";
      removeBtn.setAttribute("id", "btn");
      removeBtn.addEventListener("click", () => {
        const removeBook = new Removebook();
        removeBook.remove(index);
      });

      para.innerText = `${title} by ${author}`;
      displayDiv.appendChild(dataDiv);
      dataDiv.appendChild(para);
      dataDiv.appendChild(removeBtn);
      return singlebook;
    });
    booklink.style.color = "blue";
  }
}

export default Display;
