//create library dataset
let myLibrary = [
  {
    title: "Because of Winn-Dixie",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/51j%2BWKd9PUL._SY291_BO1,204,203,200_QL40_ML2_.jpg",
    author: "Kate DiCamillo",
    year: 2000,
    pages: 192,
    read: "yes",
    rented: "no"
  },
  {
    title: "The Fellowship of the Ring",
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/8/8e/The_Fellowship_of_the_Ring_cover.gif/220px-The_Fellowship_of_the_Ring_cover.gif",
    author: "J.R.R. Tolkien",
    year: 1954,
    pages: 423,
    read: "yes",
    rented: "no"
  },
  {
    title: "The Two Towers",
    image: "https://live.staticflickr.com/4445/23741710128_e382665a5a_b.jpg",
    author: "J.R.R. Tolkien",
    year: 1954,
    pages: 352,
    read: "yes",
    rented: "yes"
  },
  {
    title: "The Return of The King",
    image: "https://live.staticflickr.com/4498/37336088390_a2106f8b0f_b.jpg",
    author: "J.R.R. Tolkien",
    year: 1954,
    pages: 416,
    read: "yes",
    rented: "yes"
  },
  {
    title: "The Silmarillion",
    image: "https://live.staticflickr.com/197/472110019_c6bc6c9274_z.jpg",
    author: "J.R.R. Tolkien",
    year: 1977,
    pages: 454,
    read: "no",
    rented: "no"
  },
  {
    title: "The Big Oyster: History on the Half Shell",
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/e/e4/TheBigOyster.jpg/220px-TheBigOyster.jpg",
    author: "Mark Kurlansky",
    year: 2006,
    pages: 336,
    read: "no",
    rented: "no"
  }
];

//access container div from html
let container = document.getElementById("container");

//display the books on the page
function displayMyLibrary() {
  //loop through the library
  for (let i = 0; i < myLibrary.length; i++) {
    let book = myLibrary[i];
    //create container for each book
    let bookContainer = document.createElement("div");
    bookContainer.setAttribute("class", "bookContainer");
    //also give an id to be able to find later
    bookContainer.setAttribute("id", book.pages);
    //append to parent container
    container.appendChild(bookContainer);

    //loop through each book object
    for (key in book) {
      //create html elements for each book object property
      if (key === "title") {
        //title
        let title = document.createElement("p");
        //create a variable to access key's value
        let titleText = book[key];
        title.innerHTML = titleText;
        title.setAttribute("class", "bookTitle");
        //append to book container
        bookContainer.appendChild(title);
      } else if (key === "image") {
        let image = document.createElement("img");
        let imageSrc = book[key];
        image.src = imageSrc;
        //image.setAttribute("class", "image");
        //append to book container
        bookContainer.appendChild(image);
      } else if (key === "author") {
        //author
        let author = document.createElement("span");
        let authorName = book[key];
        author.innerHTML = "Author: " + authorName + "</br>";
        bookContainer.appendChild(author);
      } else if (key === "year") {
        //year written
        let year = document.createElement("span");
        let yearWritten = book[key];
        year.innerHTML = "Published: " + yearWritten + "</br>";
        bookContainer.appendChild(year);
      } else if (key === "pages") {
        let pages = document.createElement("span");
        let pagesNo = book[key];
        pages.innerHTML = "Pages: " + pagesNo + "</br>";
        bookContainer.appendChild(pages);
      } else if (key === "read") {
        let read = document.createElement("span");
        read.innerHTML = "Read: ";
        let readButton = document.createElement("button");
        //if statement to set the content of a button
        if (book[key] === "yes") {
          readButton.innerHTML = "Yes";
          readButton.setAttribute("class", "read");
        } else {
          readButton.innerHTML = "No";
          readButton.setAttribute("class", "unread");
        }

        //add onclick event
        readButton.onclick = function() {
          toggleRead(book, readButton);
        };

        //append to parent elements
        read.appendChild(readButton);
        bookContainer.appendChild(read);
      } else if (key === "rented") {
        let rented = document.createElement("span");
        rented.innerHTML = "Rented: ";
        let rentedButton = document.createElement("button");
        //if statement to set the content of a button
        if (book[key] === "yes") {
          rentedButton.innerHTML = "Yes";
        } else {
          rentedButton.innerHTML = "No";
        }

        //add onclick event
        rentedButton.onclick = function() {
          toggleRent(book, rentedButton);
        };

        //append to parent events
        rented.appendChild(rentedButton);
        bookContainer.appendChild(rented);
      }
    }

    //add delete button to each book
    let deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Delete book";
    //add onclick event
    deleteButton.onclick = function() {
      deleteBook(book);
    };
    bookContainer.appendChild(deleteButton);
  }
}

//toggle read button
function toggleRead(book, button) {
  //if book was read and a button was clicked
  //have to change to unread and change color of the button
  if (book.read === "yes") {
    //change the library data
    book.read = "no";
    //change content and CSS class
    button.innerHTML = "No";
    button.setAttribute("class", "unread");
  } else {
    book.read = "yes";
    button.innerHTML = "Yes";
    button.setAttribute("class", "read");
  }
}

//toggle rent button
function toggleRent(book, button) {
  //if book was rented and a button was clicked
  //have to change to returned and change color of the button
  if (book.rented === "yes") {
    //change the library data
    book.rented = "no";
    //change content and CSS class
    button.innerHTML = "No";
    button.setAttribute("class", "returned");
  } else {
    book.rented = "yes";
    button.innerHTML = "Yes";
    button.setAttribute("class", "rented");
  }
}

//delete a book from the library
function deleteBook(book) {
  //remove book from html
  let bookContainer = document.getElementById(book.pages);
  container.removeChild(bookContainer);

  //also remove from array
  //find where in the library the book is (index)
  let bookIndex = myLibrary.indexOf(book);
  //delete the book at index
  myLibrary.splice(bookIndex, 1);

  // return myLibrary;
}
