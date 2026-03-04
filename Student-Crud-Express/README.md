# Student CRUD API (Express.js)

A simple **Student Record Management REST API** built using **Node.js and Express.js**.  
This project demonstrates basic **CRUD operations (Create, Read, Update, Delete)** using JSON data.

## Live API

Deployed on Render:

https://student-crud-express.onrender.com

Example API endpoint:

https://student-crud-express.onrender.com/students

---

# Features

- Add new student
- View all students
- Update student details
- Delete student record
- REST API using Express
- JSON based data handling
- Dynamic ID generation

---

# Tech Stack

Backend
- Node.js
- Express.js
- JSON

Deployment
- Render

---

# Project Structure

Student-Crud-Express
│
├── server.js
├── package.json
├── public
│   └── index.html
└── README.md

---

# Installation

Clone the repository

git clone https://github.com/Nitesh-N-D/My-Web-Experiments.git

Navigate to the project folder

cd Student-Crud-Express

Install dependencies

npm install

Run the server

node server.js

Server will start at:

http://localhost:3000

---

# API Endpoints

GET all students

GET /students

Example

https://student-crud-express.onrender.com/students

---

Add new student

POST /students

Example JSON body

{
  "name": "Nitesh",
  "department": "CSE",
  "year": 3
}

---

Update student

PUT /students/:id

Example

PUT /students/1

Body

{
  "year": 4
}

---

Delete student

DELETE /students/:id

Example

DELETE /students/1

---

# Example Student JSON

{
  "id": 1,
  "name": "Nitesh",
  "department": "CSE",
  "year": 3
}

---

# Learning Outcomes

This project demonstrates:

- Building REST APIs using Express.js
- Performing CRUD operations
- Handling JSON data
- API testing with Postman
- Deploying Node.js applications

---

# Author

Nitesh N D  
Computer Science Engineering  
Madras Institute of Technology

GitHub:
https://github.com/Nitesh-N-D
