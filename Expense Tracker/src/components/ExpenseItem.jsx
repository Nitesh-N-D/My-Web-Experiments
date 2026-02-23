function ExpenseItem({ expense, setExpenses, setEditingExpense }) {
  return (
   <li className="bg-white p-4 rounded-lg shadow flex justify-between items-center hover:shadow-md transition">
  <div>
    <h3 className="text-lg font-semibold text-gray-800">
      {expense.title}
    </h3>
    <p className="text-sm text-gray-500">
      ₹{expense.amount} • {expense.date}
    </p>
  </div>

  <div className="flex gap-3">
    <button
      onClick={() => setEditingExpense(expense)}
      className="text-blue-600 font-medium hover:underline"
    >
      Edit
    </button>
    <button
      onClick={() =>
        setExpenses((prev) =>
          prev.filter((item) => item.id !== expense.id)
        )
      }
      className="text-red-600 font-medium hover:underline"
    >
      Delete
    </button>
  </div>
</li>
  );
}

export default ExpenseItem;