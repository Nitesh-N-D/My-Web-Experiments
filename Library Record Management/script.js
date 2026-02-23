function loadbooks() {
    const xhttp = new XMLHttpRequest();
    alert("Loading all books");
 
    xhttp.onload = function () {
        if (xhttp.status === 200) {
            displayBooks(xhttp, "all");
        } else {
            console.error("Failed to load books. Status: " + xhttp.status);
        }
    };
 
    xhttp.onerror = function () {
        console.error("Error loading XML file.");
    };
 
    xhttp.open("GET", "library.xml", true);
    xhttp.send();
}
 
function available() {
    const xhttp = new XMLHttpRequest();
    alert("Loading available books");
 
    xhttp.onload = function () {
        if (xhttp.status === 200) {
            displayBooks(xhttp, "available");
        }
    };
 
    xhttp.open("GET", "library.xml", true);
    xhttp.send();
}
 
function issued() {
    const xhttp = new XMLHttpRequest();
    alert("Loading issued books");
 
    xhttp.onload = function () {
        if (xhttp.status === 200) {
            displayBooks(xhttp, "issued");
        }
    };
 
    xhttp.open("GET", "library.xml", true);
    xhttp.send();
}
 
function displayBooks(xml, filter) {
    const xmlDoc = xml.responseXML;
    if (!xmlDoc) return;
 
    const books = xmlDoc.getElementsByTagName("book");
    const table = document.getElementById("books-list");
 
   
    table.innerHTML = `
        <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Author</th>
            <th>Year</th>
        </tr>`;
 
    for (let i = 0; i < books.length; i++) {
        let id = books[i].getElementsByTagName("id")[0].textContent;
        let title = books[i].getElementsByTagName("title")[0].textContent;
        let author = books[i].getElementsByTagName("author")[0].textContent;
        let year = books[i].getElementsByTagName("year")[0].textContent;
        let status = books[i].getElementsByTagName("status")[0].textContent;
 
       
        if (filter === "all" ||
            (filter === "available" && status === "Available") ||
            (filter === "issued" && status === "Issued")) {
           
            let row = table.insertRow();
            row.insertCell().innerHTML = id;
            row.insertCell().innerHTML = title;
            row.insertCell().innerHTML = author;
            row.insertCell().innerHTML = year;
        }
    }
}
