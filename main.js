//var database;
document.getElementById("database").innerHTML =   "Wait...";


fetch("https://triptoafsin.github.io/API-Host/BookDB.json", {
	"method": "GET"
})
.then(res => res.json())
.then(data => {
    database = data; //declaring a variable without previous declaration will make it global
    //lengthArray = [data];
    console.log(database);
    document.getElementById("database").innerHTML =   database.length+ " Books";
    
})
.catch(err => {
    console.log(err);
});

//console.log(database);

window.onload = function(){
    const search = document.getElementById("search");
    const matchList = document.getElementById("list");
      let books;

   //arrayDB = Object.keys(database); 

//this function searches the booklist
const searchBooks = async searchText =>{
    books = database;
    //get matches
    let matches = books.filter(book =>{
        const regex = new RegExp(`${searchText}`, 'gi'); // ^: will search for which resuls starts with , gi:case insensitive search,RegExp: Regular Expression
        return book.name.match(regex) || book.writer.match(regex) || book.subject.match(regex) || book.terms.match(regex);
    });

    if(searchText.length === 0){
        matches = [];
        matchList.innerHTML ="";
    }

    outputHtml(matches);

    console.log(matches);
};

//show results in html

const outputHtml = matches =>{
    if(matches.length > 0){
        const html = matches.map(match => `
        <div class="card">
        <p class="card-title">${match.name} <br>(${match.writer}) <br><span>${match.subject}</span></p>
        <p><a href="${match.link}" target="blank" id="url">Download</a></p>
        <small>Language: ${match.language} / Page: ${match.page} </small>
        </div>
        `).join('');
        console.log(html);
        document.getElementById("suggestion").style.display = "none";
        document.getElementById("suggestion2").style.display = "none";
        matchList.innerHTML = html;
    }
    else{
        matchList.innerHTML = null;
        document.getElementById("suggestion").style.display = "inline-block";
        document.getElementById("suggestion2").style.display = "none";
    }
};

window.addEventListener('DOMContentLoaded', searchBooks);
search.addEventListener("keyup", () => searchBooks(search.value));
console.log(database.length);
}

//books

function displayBooks(){
    document.getElementById("book-display-list2").value = "none";
    var search = document.getElementById("book-display-list").value;
    const matchList = document.getElementById("book-display");
    let books;
    console.log(search);

//this function searches the booklist
const searchBooks = async searchText =>{
    books = database;
    //get matches
    let matches = books.filter(book =>{
        const regex = new RegExp(`${searchText}`, 'gi'); // ^: will search for which resuls starts with 
        return book.name.match(regex) || book.writer.match(regex) || book.subject.match(regex) || book.terms.match(regex);
    });

    if(searchText.length === 0){
        matches = [];
        matchList.innerHTML ="";
    }

    outputHtml(matches);

    console.log(matches);
};

//show results in html

const outputHtml = matches =>{
    if(matches.length > 0){
        const html = matches.map(match => `
        <div class="card">
        <p class="card-title">${match.name} <br>(${match.writer}) <br><span>${match.subject}</span></p>
        <p><a href="${match.link}" target="blank" id="url" class="random-download">Download</a></p>
        <small>Language: ${match.language} / Page: ${match.page} </small>
        </div>
        `).join('');
        console.log(html);
        
        matchList.innerHTML = html;
    }
    else{
        matchList.innerHTML = null;
        
    }
};

    window.addEventListener('DOMContentLoaded', searchBooks);
    searchBooks(search);
    }

//display books 2

function displayBooks2(){
    document.getElementById("book-display-list").value = "none";
    var search = document.getElementById("book-display-list2").value;
    const matchList = document.getElementById("book-display");
    let books;
    console.log(search);

//this function searches the booklist
const searchBooks = async searchText =>{
    books = database;
    //get matches
    let matches = books.filter(book =>{
        const regex = new RegExp(`${searchText}`, 'gi'); // ^: will search for which resuls starts with 
        return book.name.match(regex) || book.writer.match(regex) || book.subject.match(regex) || book.terms.match(regex);
    });

    if(searchText.length === 0){
        matches = [];
        matchList.innerHTML ="";
    }

    outputHtml(matches);

    console.log(matches);
};

//show results in html

const outputHtml = matches =>{
    if(matches.length > 0){
        const html = matches.map(match => `
        <div class="card">
        <p class="card-title">${match.name} <br>(${match.writer}) <br><span>${match.subject}</span></p>
        <p><a href="${match.link}" target="blank" id="url" class="random-download">Download</a></p>
        <small>Language: ${match.language} / Page: ${match.page} </small>
        </div>
        `).join('');
        console.log(html);
        
        matchList.innerHTML = html;
    }
    else{
        matchList.innerHTML = null;
        
    }
};

    window.addEventListener('DOMContentLoaded', searchBooks);
    searchBooks(search);
    }

//random books
function getRange(){
   let sortedDB = [];
   var search = document.getElementById("random-cat").value;
   const matchList = document.getElementById("random_books");
   let books;
   console.log(search);

//this function searches the booklist
const searchBooks = async searchText =>{
   books = database;
   //get matches
   let matches = books.filter(book =>{
       const regex = new RegExp(`${searchText}`, 'gi'); // ^: will search for which resuls starts with 
       return book.name.match(regex) || book.writer.match(regex) || book.subject.match(regex) || book.terms.match(regex);
   });

   if(searchText.length === 0){
       matches = [];
       matchList.innerHTML ="";
   }

   outputHtml(matches);

   console.log(matches);
};
//show results in html
const outputHtml = matches =>{
   if(matches.length > 0){
      sortedDB = matches;
      console.log(sortedDB);
      console.log(sortedDB.length);
      document.getElementById("random-show").style.visibility = 'visible';
      document.getElementById("random_books").innerHTML = ``;
      document.getElementById("random-show").innerHTML = `<p><input type="button"  value="Suggest Me a Book" class="random-btn" id="random-btn"></p><br<br><br><br><p class="random-tot">Total ${search} books: ${sortedDB.length}</p>`;
      document.getElementById("random-btn").addEventListener("click", randomBooks);
      function randomBooks(){
         console.log("random-btn alled");
         var random1 = Math.floor(Math.random()*sortedDB.length); //it's the range sorter algo
         document.getElementById("random_books").innerHTML = `
         <div class="card">
         <p class="card-title">${sortedDB[random1].name} <br>(${sortedDB[random1].writer}) <br><span>${sortedDB[random1].subject}</span></p>
         <p><a href="${sortedDB[random1].link}" target="blank" id="url" class="random-download">Download</a></p>
         <small>Language: ${sortedDB[random1].language} / Page: ${sortedDB[random1].page} </small>
         </div>
         `;
         console.log("Random Book 1: "+ database[random1].name);
         console.log(random1);
     }
   }
   else{
       matchList.innerHTML = null;
   }
};
   window.addEventListener('DOMContentLoaded', searchBooks);
   searchBooks(search);
}

function remove(){
   document.getElementById("random-show").style.visibility = 'hidden';
}









