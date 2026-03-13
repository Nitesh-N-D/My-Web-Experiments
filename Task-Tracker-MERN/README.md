# Task Tracker Dashboard (MERN Stack)

## Overview

This project is a **Task Tracker Dashboard** built using the **MERN
Stack (MongoDB, Express, React, Node.js)**.\
It allows users to create, search, update, and delete tasks through a
modern dashboard interface.

This project was developed as part of a **Full Stack Technologies Lab
Experiment**.

------------------------------------------------------------------------

# Aim

To develop a Task Tracker Dashboard that allows users to **create,
search, update, and delete tasks** using a REST API built with **Node.js
and Express**, with data stored in **MongoDB** and a frontend built
using **React**.

------------------------------------------------------------------------

# Technologies Used

Backend - Node.js - Express.js - MongoDB - Mongoose - CORS

Frontend - React - Vite - Material UI - Axios

------------------------------------------------------------------------

# Project Folder Structure

    task-tracker-dashboard
    │
    ├── backend
    │   │
    │   ├── config
    │   │   └── db.js
    │   │
    │   ├── models
    │   │   └── Task.js
    │   │
    │   ├── routes
    │   │   └── taskRoutes.js
    │   │
    │   ├── server.js
    │   ├── package.json
    │   └── .gitignore
    │
    └── frontend
        │
        ├── public
        │   └── index.html
        │
        ├── src
        │   │
        │   ├── components
        │   │   ├── Sidebar.jsx
        │   │   ├── SearchBar.jsx
        │   │   ├── TaskForm.jsx
        │   │   └── TaskTable.jsx
        │   │
        │   ├── services
        │   │   └── api.js
        │   │
        │   ├── App.jsx
        │   ├── App.css
        │   └── main.jsx
        │
        ├── package.json
        ├── vite.config.js
        └── .gitignore

------------------------------------------------------------------------

# MongoDB Setup (Localhost)

1.  Install **MongoDB Community Server**.
2.  Start MongoDB service.

Open terminal and run:

    mongosh

MongoDB runs on:

    mongodb://127.0.0.1:27017

------------------------------------------------------------------------

# Database Connection

File: `backend/config/db.js`

    mongoose.connect("mongodb://127.0.0.1:27017/taskDB");

This automatically creates the **taskDB database** when tasks are
inserted.

------------------------------------------------------------------------

# Backend Setup

Navigate to backend folder:

    cd backend

Install dependencies:

    npm install

Run backend server:

    npm run dev

Backend server runs on:

    http://localhost:5000

------------------------------------------------------------------------

# Frontend Setup

Navigate to frontend folder:

    cd frontend

Install dependencies:

    npm install

Run React app:

    npm run dev

Frontend runs on:

    http://localhost:5173

------------------------------------------------------------------------

# Features

-   Add new tasks
-   View all tasks
-   Update task status
-   Delete tasks
-   Auto search tasks
-   Sidebar dashboard layout
-   Responsive full-page UI

------------------------------------------------------------------------

# API Endpoints

  Operation       Method   Endpoint
  --------------- -------- ----------------------------
  Create Task     POST     /api/tasks/add
  Get All Tasks   GET      /api/tasks
  Search Tasks    GET      /api/tasks/search/:keyword
  Update Task     PUT      /api/tasks/:id
  Delete Task     DELETE   /api/tasks/:id

------------------------------------------------------------------------

# Example Task JSON

    {
      "title": "Study DBMS",
      "description": "Read normalization topics",
      "status": "Pending"
    }

------------------------------------------------------------------------

# Output

Tasks are stored in **MongoDB** and displayed in a **React Dashboard
UI**.\
Users can manage tasks efficiently using CRUD operations.

------------------------------------------------------------------------

# Author

Nitesh N D\
Computer Science Engineering Student
