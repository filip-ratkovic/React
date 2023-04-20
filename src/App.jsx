import React from "react";
// import Contact from "./contactPage/Contact";
import Expense from "./udemy/components/first/Expense";
import NewExpense from "./udemy/components/form/NewExpense";
import TourCard from './components/ToursCard/TourCard'


const App = () => {

  // const addExpenseHandler = expense => {
  //   console.log(expense )
  //   console.log('app.js')
  // }
  return (
    <div>
      {/* <NewExpense onAddExpense = {addExpenseHandler}/>
      <Expense/> */}
      <TourCard/>
    </div>
  )
}

export default App;