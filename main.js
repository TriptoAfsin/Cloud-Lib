//var database;
document.getElementById("database").innerHTML =   "Wait...";
document.getElementById("search").style.display = "none";
document.getElementById("lib-txt").innerText = "Loading..";

var otherDB;


fetch("https://triptoafsin.github.io/API-Host/BookDB.json", {
	"method": "GET"
})
.then(res => res.json())
.then(data => {
    database = data; //declaring a variable without previous declaration will make it global
    //lengthArray = [data];
    otherDB = data;
    console.log(database);
    document.getElementById("database").innerHTML =   database.length+ " Books";
    document.getElementById("search").style.display = "inline-block";
    document.getElementById("lib-txt").innerText = "Cloud Lib";
    //books = database;
    
})
.catch(err => {
    console.log(err);
});

//console.log(database);

window.onload = function(){
    const search = document.getElementById("search");
    const matchList = document.getElementById("list");

    registerSW(); //pwa service register function

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



//code for PWA

async function registerSW(){

    if('serviceWorker' in navigator){
        try{
            await navigator.serviceWorker.register('./sw.js');
        }catch(e){
            console.log("Service worker registration failed");
        }
    }
}










