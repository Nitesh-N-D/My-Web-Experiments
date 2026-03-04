# Product Inventory Dashboard (React + Express)

## Overview

This project is a **Product Inventory Dashboard** built using
**React.js** for the frontend and **Express.js** for the backend.\
It demonstrates a full‑stack web application implementing **CRUD
operations**, **search functionality**, and **REST API integration**.

The application allows users to: - Add new products - View product
inventory - Update product price and quantity - Delete products - Search
products dynamically

------------------------------------------------------------------------

## Live Demo

Frontend (Vercel) https://product-inventory-theta.vercel.app

Backend API (Render)
https://product-inventory-backend-g4vj.onrender.com/products

------------------------------------------------------------------------

## Tech Stack

### Frontend

-   React.js
-   Axios
-   CSS

### Backend

-   Node.js
-   Express.js
-   CORS

### Deployment

-   Vercel (Frontend)
-   Render (Backend)

------------------------------------------------------------------------

## Features

-   Product Inventory Dashboard UI
-   REST API communication between frontend and backend
-   CRUD operations (Create, Read, Update, Delete)
-   Real-time search functionality
-   Dynamic UI updates using React state
-   JSON-based data exchange

------------------------------------------------------------------------

## Project Structure

    product-inventory/
    │
    ├── backend/
    │   ├── server.js
    │   └── package.json
    │
    ├── frontend/
    │   ├── package.json
    │   └── src/
    │       ├── App.js
    │       ├── App.css
    │       └── index.js

------------------------------------------------------------------------

## Installation and Setup

### 1. Clone Repository

    git clone https://github.com/Nitesh-N-D/My-Web-Experiments.git

------------------------------------------------------------------------

### 2. Run Backend

    cd product-inventory/backend
    npm install
    node server.js

Backend will start at:

    http://localhost:3001

------------------------------------------------------------------------

### 3. Run Frontend

    cd product-inventory/frontend
    npm install
    npm start

Frontend will run at:

    http://localhost:3000

------------------------------------------------------------------------

## API Endpoints

  Method   Endpoint        Description
  -------- --------------- --------------------
  GET      /products       Fetch all products
  POST     /products       Add new product
  PUT      /products/:id   Update product
  DELETE   /products/:id   Delete product

------------------------------------------------------------------------

## Example Product JSON

    {
      "id": 1,
      "name": "Laptop",
      "price": 60000,
      "quantity": 5
    }

------------------------------------------------------------------------

## Learning Outcomes

This project demonstrates:

-   Building REST APIs using Express.js
-   Creating dynamic UI using React.js
-   Performing CRUD operations
-   Integrating frontend with backend APIs
-   Deploying full-stack applications

------------------------------------------------------------------------

## Author

Nitesh N D\
Computer Science Engineering\
Madras Institute of Technology

GitHub: https://github.com/Nitesh-N-D
