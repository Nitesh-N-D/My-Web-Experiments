import ExpenseItem from "./ExpenseItem";

function ExpenseList({ expenses, setExpenses, setEditingExpense }) {
  if (expenses.length === 0) {
    return (
      <p className="text-sm text-center text-gray-500 mt-6">
        No expenses found
      </p>
    );
  }

  return (
    <ul className="bg-white border border-gray-200 divide-y divide-gray-200">
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