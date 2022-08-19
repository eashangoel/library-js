let title= document.getElementsByName("title")[0];
let author= document.getElementsByName("author")[0];
let pages= document.getElementsByName("pages")[0];
let read= document.getElementsByName("read")[0];
let myLibrary= [];
document.getElementsByClassName("popupform")[0].style.display = "none";

function removeBook(title){
    console.log("removed" + title);
    elementToBeRemoved = document.getElementsByClassName("card "+title);
    console.log(elementToBeRemoved);
    elementToBeRemoved[0].remove();
    let indexToBeRemoved= myLibrary.findIndex(book => book.title === title);
    myLibrary.splice(indexToBeRemoved, 1);
}
function createButton(title){
    let removeButton= document.createElement("button");
    removeButton.className= "remove"
    removeButton.setAttribute("title", title);
    removeButton.innerHTML= "Remove from list";
    removeButton.addEventListener("click", removeBook.bind(event, title));
    return removeButton;
}
class Book{
 title= title;
 author= author;
 pages= pages;
 read= read;
}


function addBook(newBook){
  myLibrary.push(newBook);
  console.log(myLibrary);
}
function openForm() {
    document.getElementsByClassName("popupform")[0].style.display = "block";
    title.value = ""
    author.value= ""
    pages.value= ""
    read.checked = false;
  }
function closeForm() {
    let newBook= new Book(title.value, author.value,pages.value,read.checked);
    addBook(newBook);
    document.getElementsByClassName("popupform")[0].style.display = "none";
    containerDiv = document.getElementsByClassName("container");
    const cardDiv= document.createElement('div');
    cardDiv.className = 'card '+title.value;
    let cardInfo=[];
    for (let i=0; i<4; i++){
        cardInfo[i]=document.createElement("p");
        switch(i){
            case 0: cardInfo[i].innerHTML= title.value;
            cardInfo[i].className="header";
            break;
            case 1: cardInfo[i].innerHTML= "Author: "+author.value;
            break;
            case 2: cardInfo[i].innerHTML= "Pages: "+pages.value;
            break;
            case 3: if (read.checked== true){
                cardInfo[i].innerHTML= "Read";}
                else {cardInfo[i].innerHTML="Unread";}
            break;
            default: break;
        }
        cardDiv.appendChild(cardInfo[i]);
    }
    let removeButton= createButton(title.value);
    cardDiv.appendChild(removeButton);
    containerDiv[0].appendChild(cardDiv);
  }


addCardButton = document.getElementById("addCardButton");
addCardButton.addEventListener("click", openForm);