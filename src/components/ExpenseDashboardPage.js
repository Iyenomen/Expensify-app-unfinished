import React from "react";
import ExpenseList from "./ExpenseList";
import ExpenseListFilters from "./ExpenseListsFilters";

const ExpenseDashboardPage = () => (
  <div>
    <ExpenseListFilters />
    <ExpenseList />
  </div>
);

export default ExpenseDashboardPage;