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
    className="border border-gray-300 p-4 mb-6"
  >
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
      <input
        className="border border-gray-300 p-2"
        placeholder="Expense Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      <input
        className="border border-gray-300 p-2"
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
      />

      <input
        className="border border-gray-300 p-2"
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
    </div>

    <button
      className="mt-4 border border-gray-800 px-4 py-2 text-sm text-gray-700"
    >
      {editingExpense ? "Update Expense" : "Add Expense"}
    </button>
  </form>
);
}

export default ExpenseForm;