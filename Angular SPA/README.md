# Angular Single Page Application (SPA)

## Title
Creation of a Simple Single Page Application Using Angular Components and Data Binding

---

## Description
This project is a simple **Single Page Application (SPA)** developed using the **Angular framework**.  
The application demonstrates the use of **Angular components, routing, and data binding** to build a dynamic web application that runs without page reload.

---

## Objective
- To understand the structure of an Angular application  
- To create and use multiple Angular components  
- To implement data binding techniques in Angular  
- To demonstrate Single Page Application behavior using routing  

---

## Application Overview
The application consists of two main pages:
1. **Home Page**
2. **Student Page**

Navigation between these pages is handled using **Angular Routing**, ensuring that the page does not reload during navigation.

---

## Features of the Application

### Home Page
- Acts as the default landing page of the application
- Displays a welcome message
- Provides navigation to the Student page

### Student Page
- Allows the user to enter **student name** and **department**
- Uses **two-way data binding** to capture user input
- Uses a **Submit button** to add student details
- Displays **multiple student records dynamically**
- Uses **event binding** and **structural directives**
- Allows navigation back to the Home page

---

## Angular Concepts Used

### Components
- **App Component** – Root component that manages layout and navigation  
- **Home Component** – Displays the home page  
- **Student Component** – Manages student data and user interaction  

### Data Binding
- **Interpolation (`{{ }}`)** – Displays dynamic data in the UI  
- **Two-way Data Binding (`[(ngModel)]`)** – Captures user input  
- **Event Binding (`(click)`)** – Handles user actions  

### Directives
- **`*ngFor`** – Displays a list of multiple students dynamically  

### Routing
- Angular Router is used to navigate between Home and Student pages
- Ensures SPA behavior without browser refresh

---

## Technologies Used
- Angular
- TypeScript
- HTML
- CSS
- Node.js and npm

---

## Folder Structure

```text
src/
├── app/
│   ├── home/
│   ├── student/
│   ├── app.ts
│   ├── app.html
│   └── app.routes.ts
├── styles.css
└── main.ts


## How the SPA Works
1. The application loads the Home component by default.
2. User navigates to the Student page using Angular routing.
3. User enters student details in input fields.
4. On clicking Submit, the details are added to a list.
5. The list updates dynamically without page reload.
6. Navigation between pages happens smoothly as a Single Page Application.

---

## Outcome
- Successfully implemented an Angular Single Page Application
- Demonstrated components, routing, and data binding
- Achieved dynamic UI updates without page refresh

---

## Conclusion
This experiment demonstrates how Angular can be used to build a simple yet effective Single Page Application using components and data binding. It helps in understanding the core concepts of modern front-end web development.

---
