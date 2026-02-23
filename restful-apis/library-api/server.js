const http = require('http');
const fs = require('fs');
function readData() {
    const data = fs.readFileSync('data.json');
    return JSON.parse(data);
}
function writeData(data) {
    fs.writeFileSync('data.json', JSON.stringify(data, null, 2));
}

const server = http.createServer((req, res) => {
    const myURL = new URL(req.url, `http://${req.headers.host}`);
    const path = myURL.pathname;
    const method = req.method;

    res.setHeader('Content-Type', 'application/json');
   
    if (path === '/' && method === 'GET') {
        res.writeHead(200);
        res.end(JSON.stringify({ message: "Library REST API is running" }));
    }

    else if (path === '/books' && method === 'GET') {
        const books = readData();
        res.writeHead(200);
        res.end(JSON.stringify(books));
    }


    else if (path.startsWith('/books/') && method === 'GET') {
        const id = parseInt(path.split('/')[2]);
        const books = readData();
        const book = books.find(b => b.id === id);

        if (!book) {
            res.writeHead(404);
            res.end(JSON.stringify({ message: "Book not found" }));
        } else {
            res.writeHead(200);
            res.end(JSON.stringify(book));
        }
    }

   
    else if (path === '/books' && method === 'POST') {
        let body = '';

        req.on('data', chunk => body += chunk.toString());

        req.on('end', () => {
            const newBook = JSON.parse(body);
            const books = readData();
            books.push(newBook);
            writeData(books);

            res.writeHead(201);
            res.end(JSON.stringify(newBook));
        });
    }

    else if (path.startsWith('/books/') && method === 'PUT') {
        const id = parseInt(path.split('/')[2]);
        let body = '';

        req.on('data', chunk => body += chunk.toString());

        req.on('end', () => {
            const updatedData = JSON.parse(body);
            const books = readData();
            const index = books.findIndex(b => b.id === id);

            if (index === -1) {
                res.writeHead(404);
                res.end(JSON.stringify({ message: "Book not found" }));
            } else {
                books[index].title = updatedData.title;
                books[index].author = updatedData.author;
                books[index].available = updatedData.available;
                writeData(books);

                res.writeHead(200);
                res.end(JSON.stringify(books[index]));
            }
        });
    }


    else if (path.startsWith('/books/') && method === 'DELETE') {
        const id = parseInt(path.split('/')[2]);
        let books = readData();
        books = books.filter(b => b.id !== id);
        writeData(books);

        res.writeHead(200);
        res.end(JSON.stringify({ message: "Book deleted successfully" }));
    }


    else {
        res.writeHead(404);
        res.end(JSON.stringify({ message: "Route not found" }));
    }
});
server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
