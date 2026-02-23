function ExpenseItem({ expense, setExpenses, setEditingExpense }) {
  return (
  <li className="bg-white border border-gray-300 px-4 py-3 flex justify-between items-center hover:bg-gray-50 transition">
    

    <div>
      <h3 className="text-sm font-semibold text-gray-900">
        {expense.title}
      </h3>
      <p className="text-xs text-gray-500">
        ₹{expense.amount} • {expense.date}
      </p>
    </div>

    <div className="flex gap-4 text-sm">
      <button
        onClick={() => setEditingExpense(expense)}
        className="text-red-600 hover:underline"
      >
        Edit
      </button>

      <button
        onClick={() =>
          setExpenses((prev) =>
            prev.filter((item) => item.id !== expense.id)
          )
        }
        className="text-gray-500 hover:text-red-600 hover:underline"
      >
        Delete
      </button>
    </div>
  </li>
);
}

export default ExpenseItem;
