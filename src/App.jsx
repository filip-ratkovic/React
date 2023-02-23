import React from "react";
// import Contact from "./contactPage/Contact";
import Expense from "./udemy/components/first/Expense";
import NewExpense from "./udemy/components/form/NewExpense";


const App = () => {

  const addExpenseHandler = expense => {
    console.log(expense )
    console.log('app.js')
  }
  return (
    <div>
      <NewExpense onAddExpense = {addExpenseHandler}/>
      <Expense/>
    </div>
  )
}

export default App;