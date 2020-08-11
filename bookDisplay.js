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
        <div class="card" onclick="location.href='${match.link}'">
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
