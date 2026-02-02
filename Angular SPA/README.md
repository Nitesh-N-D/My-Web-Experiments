Angular Single Page Application (SPA)
📌 Title

Creation of a Simple Single Page Application Using Angular Components and Data Binding

📖 Description

This project is a Single Page Application (SPA) developed using the Angular framework.
It demonstrates the fundamental concepts of Angular such as components, routing, data binding, and directives to build a dynamic web application that operates without full page reloads.

The application consists of multiple components that interact seamlessly through Angular routing, ensuring smooth navigation and real-time UI updates.

🎯 Objective

To understand the basic structure of an Angular application

To create and manage multiple Angular components

To implement different types of data binding

To demonstrate Single Page Application behavior using Angular routing

🧩 Application Overview

The application contains two main pages:

Home Page

Student Page

Navigation between these pages is handled using Angular Router, ensuring that content updates dynamically without refreshing the browser.

✨ Features of the Application
🏠 Home Page

Acts as the default landing page

Displays a welcome message

Provides navigation to the Student page

🎓 Student Page

Accepts student name and department as input

Uses two-way data binding to capture user input

Adds student details using a Submit button

Displays multiple student records dynamically

Implements event binding and structural directives

Allows navigation back to the Home page

🛠️ Angular Concepts Used
🔹 Components

App Component – Root component that manages layout and routing

Home Component – Displays the home page content

Student Component – Handles student input and data display

🔹 Data Binding

Interpolation ({{ }}) – Displays dynamic data in the UI

Two-way Data Binding ([(ngModel)]) – Synchronizes input fields with component data

Event Binding ((click)) – Handles user interactions

🔹 Directives

*ngFor – Displays multiple student records dynamically

🔹 Routing

Angular Router enables navigation between pages

Ensures SPA behavior without browser refresh

🧰 Technologies Used

Angular

TypeScript

HTML

CSS

Node.js

npm

🔄 How the SPA Works

The application loads the Home Component by default.

User navigates to the Student Page using Angular routing.

User enters student details in input fields.

On clicking Submit, the data is added to a list.

The student list updates dynamically without page reload.

Navigation between pages occurs smoothly as a Single Page Application.

📁 Folder Structure
src/
├── app/
│   ├── home/
│   │   ├── home.component.ts
│   │   ├── home.component.html
│   │   └── home.component.css
│   ├── student/
│   │   ├── student.component.ts
│   │   ├── student.component.html
│   │   └── student.component.css
│   ├── app.component.ts
│   ├── app.component.html
│   └── app.routes.ts
├── styles.css
└── main.ts

🚀 How to Run the Project
Prerequisites

Node.js installed

Angular CLI installed

Steps
npm install
ng serve


Open your browser and navigate to:

http://localhost:4200/

✅ Outcome

Successfully implemented an Angular Single Page Application

Demonstrated Angular components, routing, and data binding

Achieved dynamic UI updates without page refresh

🧠 Conclusion

This project demonstrates how Angular can be used to build a simple yet effective Single Page Application using components, routing, and data binding. It provides a strong foundation for understanding modern front-end web development concepts.
