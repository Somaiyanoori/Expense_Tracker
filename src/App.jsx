import { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import ExpenseItem from "./components/ExpenseItem";
import ExpenseList from "./components/ExpenseList";
import ExpenseForm from "./components/ExpenseForm";

function createId() {
  if (typeof crypto !== "undefined" && crypto.randomUUID)
    return crypto.randomUUID();
  return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function App() {
  const [expenses, setExpenses] = useState([
    { id: createId(), title: "Food", amount: 20, category: "Food" },
    { id: createId(), title: "Taxi", amount: 12, category: "Transport" },
  ]);
  function handleAddExpense(data) {
    const newExpense = { id: createId(), ...data };
    setExpenses((prev) => {
      return [newExpense, ...prev];
    });
  }

  return (
    <div className="page">
      <header className="header">
        <div>
          <h1 className="title">Expense Track Applications</h1>
          <p className="subtitle">Week 1,2 practice project.</p>
        </div>
      </header>

      <Card title={"Add Expense"}>
        <ExpenseForm onAddExpense={handleAddExpense}></ExpenseForm>
      </Card>

      <Card title={"Expenses"}>
        <ExpenseList expenses={expenses}></ExpenseList>
      </Card>
    </div>
  );
}

export default App;
