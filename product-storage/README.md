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

## Screenshots

Post Method To add products
<img width="975" height="525" alt="image" src="https://github.com/user-attachments/assets/c6392595-b813-4105-9493-1e1f6ee6b7d6" />
Get Method To view all products
<img width="975" height="613" alt="image" src="https://github.com/user-attachments/assets/2792a675-713e-4a08-a3fc-a12604479c5f" />
Put Method to update the details
<img width="975" height="599" alt="image" src="https://github.com/user-attachments/assets/ff929655-53b6-4299-8fa7-9d0f0c9d1f98" />
Deleting Products using delete method
<img width="975" height="617" alt="image" src="https://github.com/user-attachments/assets/12fb93bc-95da-467b-bc6b-463e97fa0a2f" />
MongoDB Database - productDB
<img width="975" height="525" alt="image" src="https://github.com/user-attachments/assets/f8d5fcf3-9e0d-4a29-ad69-828f7ea671c1" />

