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
        res.end(JSON.stringify({ message: "Student REST API is running" })); 
    } 
    else if (path === '/students' && method === 'GET') { 
        const students = readData(); 
        res.writeHead(200); 
        res.end(JSON.stringify(students)); 
    } 
    else if (path.startsWith('/students/') && method === 'GET') { 
        const id = parseInt(path.split('/')[2]); 
        const students = readData(); 
        const student = students.find(s => s.id === id); 
 
        if (!student) { 
            res.writeHead(404); 
            res.end(JSON.stringify({ message: "Student not found" })); 
        } else { 
            res.writeHead(200); 
            res.end(JSON.stringify(student)); 
        } 
    } 
    else if (path === '/students' && method === 'POST') { 
        let body = ''; 
 
        req.on('data', chunk => body += chunk.toString()); 
 
        req.on('end', () => { 
            const newStudent = JSON.parse(body); 
            const students = readData(); 
            students.push(newStudent); 
            writeData(students); 
 
            res.writeHead(201); 
            res.end(JSON.stringify(newStudent)); 
        }); 
    } 
    else if (path.startsWith('/students/') && method === 'PUT') { 
        const id = parseInt(path.split('/')[2]); 
        let body = ''; 
 
        req.on('data', chunk => body += chunk.toString()); 
 
        req.on('end', () => { 
            const updatedData = JSON.parse(body); 
            const students = readData(); 
            const index = students.findIndex(s => s.id === id); 
 
            if (index === -1) { 
                res.writeHead(404); 
                res.end(JSON.stringify({ message: "Student not found" })); 
            } else { 
                students[index].name = updatedData.name; 
                students[index].course = updatedData.course; 
                writeData(students); 
 
                res.writeHead(200); 
                res.end(JSON.stringify(students[index])); 
            } 
        }); 
    } 
    else if (path.startsWith('/students/') && method === 'DELETE') { 
        const id = parseInt(path.split('/')[2]); 
        let students = readData(); 
        students = students.filter(s => s.id !== id); 
        writeData(students); 
 
        res.writeHead(200); 
        res.end(JSON.stringify({ message: "Student deleted successfully" })); 
    } 
    else { 
        res.writeHead(404); 
        res.end(JSON.stringify({ message: "Route not found" })); 
    } 
}); 
server.listen(3000, () => { 
    console.log("Server running at http://localhost:3000"); 
});
