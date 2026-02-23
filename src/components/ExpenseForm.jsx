import { useEffect, useState } from "react";

function ExpenseForm({
  expenses,
  setExpenses,
  editingExpense,
  setEditingExpense,
}) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    if (editingExpense) {
      setTitle(editingExpense.title);
      setAmount(editingExpense.amount);
      setDate(editingExpense.date);
    }
  }, [editingExpense]);

  function handleSubmit(e) {
    e.preventDefault();

    if (editingExpense) {
      setExpenses(
        expenses.map((exp) =>
          exp.id === editingExpense.id
            ? { ...exp, title, amount: Number(amount), date }
            : exp
        )
      );
      setEditingExpense(null);
    } else {
      setExpenses([
        ...expenses,
        {
          id: Date.now(),
          title,
          amount: Number(amount),
          date,
        },
      ]);
    }

    setTitle("");
    setAmount("");
    setDate("");
  }

 return (
  <form
    onSubmit={handleSubmit}
    className="bg-gray-50 border border-gray-300 p-5 mb-6 shadow-sm"
  >
    
    {/* Section Title */}
    <h3 className="text-sm font-semibold text-gray-900 mb-4">
      {editingExpense ? "Edit Expense" : "Add New Expense"}
    </h3>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
      <input
        className="bg-white border border-gray-300 p-2 text-sm focus:outline-none focus:ring-1 focus:ring-red-500"
        placeholder="Expense Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      <input
        className="bg-white border border-gray-300 p-2 text-sm focus:outline-none focus:ring-1 focus:ring-red-500"
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
      />

      <input
        className="bg-white border border-gray-300 p-2 text-sm focus:outline-none focus:ring-1 focus:ring-red-500"
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
    </div>

    <button
      className="mt-4 px-5 py-2 text-sm font-medium text-white bg-red-600 hover:bg-red-700 transition"
    >
      {editingExpense ? "Update Expense" : "Add Expense"}
    </button>
  </form>
);
}

export default ExpenseForm;