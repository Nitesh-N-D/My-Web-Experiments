# Angular Single Page Application (SPA)

## 📌 Title
**Creation of a Simple Single Page Application Using Angular Components and Data Binding**

---

## 📖 Description
This project is a **Single Page Application (SPA)** developed using the **Angular framework**.  
It demonstrates the core concepts of Angular such as **components, routing, data binding, and directives** to build a dynamic web application that works without full page reloads.

The application ensures smooth navigation and real-time updates, making it a practical example of modern front-end development using Angular.

---

## 🎯 Objective
- To understand the structure of an Angular application  
- To create and use multiple Angular components  
- To implement data binding techniques in Angular  
- To demonstrate Single Page Application behavior using Angular routing  

---

## 🧩 Application Overview
The application consists of **two main pages**:
1. **Home Page**
2. **Student Page**

Navigation between these pages is handled using **Angular Router**, ensuring SPA behavior without browser refresh.

---

## ✨ Features of the Application

### 🏠 Home Page
- Acts as the default landing page  
- Displays a welcome message  
- Provides navigation to the Student page  

### 🎓 Student Page
- Allows users to enter **student name** and **department**
- Uses **two-way data binding** to capture user input
- Uses a **Submit button** to add student details
- Displays **multiple student records dynamically**
- Uses **event binding** and **structural directives**
- Allows navigation back to the Home page  

---

## 🛠️ Angular Concepts Used

### 🔹 Components
- **App Component** – Root component managing layout and navigation  
- **Home Component** – Displays the home page  
- **Student Component** – Manages student data and interactions  

### 🔹 Data Binding
- **Interpolation (`{{ }}`)** – Displays dynamic data  
- **Two-way Data Binding (`[(ngModel)]`)** – Captures user input  
- **Event Binding (`(click)`)** – Handles button actions  

### 🔹 Directives
- **`*ngFor`** – Displays multiple student records dynamically  

### 🔹 Routing
- Angular Router is used to navigate between pages  
- Ensures smooth SPA navigation without page reload  

---

## 🧰 Technologies Used
- Angular  
- TypeScript  
- HTML  
- CSS  
- Node.js  
- npm  

---

## 🔄 How the SPA Works
1. The application loads the **Home Component** by default.  
2. User navigates to the **Student Page** using Angular routing.  
3. User enters student details in input fields.  
4. On clicking **Submit**, the student data is added to a list.  
5. The list updates dynamically without reloading the page.  
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

## 📁 Folder Structure


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

