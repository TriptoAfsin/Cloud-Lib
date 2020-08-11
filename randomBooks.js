fetch("https://triptoafsin.github.io/API-Host/BookDB.json", {
	"method": "GET"
})
.then(res => res.json())
.then(data => {
    database = data; //declaring a variable without previous declaration will make it global
    //lengthArray = [data];
    otherDB = data;
    console.log(database);
    //books = database;
    
})
.catch(err => {
    console.log(err);
});




//random books
function getRange(){
    let sortedDB = [];
    var search = document.getElementById("random-cat").value;
    const matchList = document.getElementById("list");
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
       document.getElementById("list").innerHTML = ``;
       document.getElementById("random-show").innerHTML = `<p><input type="button"  value="Suggest Me a Book" class="random-btn" id="random-btn"></p><br<br><br><br><p class="random-tot">Total ${search} books: ${sortedDB.length}</p>`;
       document.getElementById("random-btn").addEventListener("click", randomBooks);
       function randomBooks(){
          console.log("random-btn alled");
          var random1 = Math.floor(Math.random()*sortedDB.length); //it's the range sorter algo
          document.getElementById("list").innerHTML = `
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
 
 
 
