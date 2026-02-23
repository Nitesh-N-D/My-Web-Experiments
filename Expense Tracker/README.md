# ExpenseTracker (ExpenseFlow)

Personal Expense Tracker is a frontend-only web application built with **React**, **React Router**, **Tailwind CSS**, and **Vite**.  
It allows users to securely log in, add, edit, delete, and view expenses, along with dynamically calculating the total spent.

🔗 **Live Demo:** https://expense-tracker-psi-smoky.vercel.app/

---

## 🧪 **Test User Credentials**

Use the following test user to log in:


Username: user
Password: user123


*(You can add more users by editing `src/data/users.json`.)*

---

## 📌 **Features**

- ✔ Login with mock authentication (JSON-based)
- ✔ Add new expense (title, amount, date)
- ✔ Edit/update existing expenses
- ✔ Delete unwanted expenses
- ✔ Search and filter expenses
- ✔ Calculate total expense
- ✔ Responsive, clean UI with Tailwind CSS

---

## 📁 Project Structure

```text
expense-tracker/
├── README.md
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
├── public/
└── src/
    ├── index.css
    ├── main.jsx
    ├── App.jsx
    ├── AppRouter.jsx
    ├── data/
    │   └── users.json
    ├── pages/
    │   ├── Login.jsx
    │   └── Dashboard.jsx
    └── components/
        ├── ExpenseForm.jsx
        ├── ExpenseList.jsx
        ├── ExpenseItem.jsx
        └── SearchFilter.jsx


---

## 🚀 How to Run Locally

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/Nitesh-N-D/My-Web-Experiments.git

2️⃣ Navigate to the Project Directory
cd My-Web-Experiments/expense-tracker

3️⃣ Install Dependencies
npm install

4️⃣ Start the Development Server
npm run dev

5️⃣ Open in Browser
http://localhost:5173
