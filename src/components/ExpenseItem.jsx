export default function ExpenseItem({ expense }) {
  return (
    <div className="item">
      <div>
        <div className="itemTitle">{expense.title}</div>
        <div className="itemMeta">{expense.category}</div>
      </div>
      <div className="amount">${expense.amount}</div>
    </div>
  );
}
