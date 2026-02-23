import { useEffect, useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import SearchFilter from "./components/SearchFilter";

function App() {
  const [expenses, setExpenses] = useState([]);
  const [search, setSearch] = useState("");
  const [filterDate, setFilterDate] = useState("");
  const [editingExpense, setEditingExpense] = useState(null);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("expenses"));
    if (stored) setExpenses(stored);
  }, []);

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  const filteredExpenses = expenses.filter((expense) => {
    const matchesTitle = expense.title
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesDate = filterDate ? expense.date === filterDate : true;
    return matchesTitle && matchesDate;
  });

  const total = filteredExpenses.reduce(
    (sum, expense) => sum + expense.amount,
    0
  );

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">
         Personal Expense Tracker
      </h1>

      <ExpenseForm
        expenses={expenses}
        setExpenses={setExpenses}
        editingExpense={editingExpense}
        setEditingExpense={setEditingExpense}
      />

      <SearchFilter
        search={search}
        setSearch={setSearch}
        filterDate={filterDate}
        setFilterDate={setFilterDate}
      />

      <ExpenseList
        expenses={filteredExpenses}
        setExpenses={setExpenses}
        setEditingExpense={setEditingExpense}
      />

  <div className="mt-4 text-sm text-right">
  <span className="mr-1">Total Expense:</span>
  <span className="font-semibold">
    ₹{total}
  </span>
</div>
</div>
  );
}

export default App;