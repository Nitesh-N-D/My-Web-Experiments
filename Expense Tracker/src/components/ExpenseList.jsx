import ExpenseItem from "./ExpenseItem";

function ExpenseList({ expenses, setExpenses, setEditingExpense }) {
  if (expenses.length === 0) {
    return <p className="text-center text-gray-500">No expenses found</p>;
  }

  return (
  <ul className="bg-white border border-gray-300 divide-y divide-gray-200 shadow-sm">
    {expenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        expense={expense}
        setExpenses={setExpenses}
        setEditingExpense={setEditingExpense}
      />
    ))}
  </ul>
);
}

export default ExpenseList;
