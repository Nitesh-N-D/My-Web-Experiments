# Basic Product Storage using MongoDB and Express

## Aim

To create a simple Node.js application that stores and retrieves product
data using MongoDB.

## Technologies Used

-   Node.js
-   Express.js
-   MongoDB
-   Mongoose
-   Postman / Browser

## Project Folder Structure

    product-storage
    │
    ├── config
    │   └── db.js
    │
    ├── models
    │   └── Product.js
    │
    ├── routes
    │   └── productRoutes.js
    │
    ├── server.js
    ├── package.json
    ├── package-lock.json
    └── README.md

## MongoDB Setup (Localhost)

1.  Install **MongoDB Community Server**.
2.  Start the MongoDB service.

Open terminal and run:

    mongosh

MongoDB runs on:

    mongodb://127.0.0.1:27017

## Database Connection

File: `config/db.js`

``` javascript
mongoose.connect("mongodb://127.0.0.1:27017/productDB");
```

This automatically creates the database **productDB** when the first
document is inserted.

## Install Dependencies

Inside the project folder run:

    npm install

Dependencies installed:

-   express
-   mongoose
-   cors
-   nodemon

## Run the Server

Start the backend server:

    npm run dev

Server runs at:

    http://localhost:5000

## API Endpoints

  Operation            Method   Endpoint
  -------------------- -------- ---------------------
  Add Product          POST     `/api/products/add`
  Get All Products     GET      `/api/products`
  Get Single Product   GET      `/api/products/:id`
  Update Product       PUT      `/api/products/:id`
  Delete Product       DELETE   `/api/products/:id`

## Example JSON

    {
      "name": "Laptop",
      "price": 50000,
      "category": "Electronics"
    }

## Output

Product data is stored in **MongoDB** and retrieved using **REST API
endpoints** built with **Express.js**.
