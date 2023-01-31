import React from "react";
import FirstComponent from "./udemy/FirstComponent"
const App = () => {
  const expenses = [
    {id:1, title: "Toyota", amount: 5999, date: new Date(2021, 2, 27) },
    {id:2, title: "Audi", amount: 8450, date: new Date(2022, 12, 7) },
    {id:3, title: "BMW", amount: 7200, date: new Date(2018, 22, 17) }

  ]
  return (
    <div>
      <FirstComponent 
      title={expenses[0].title}
      amount = {expenses[0].amount}
      date = {expenses[0].date}
      />
      <FirstComponent
       title={expenses[1].title}
       amount = {expenses[1].amount}
       date = {expenses[1].date} />
      <FirstComponent 
       title={expenses[2].title}
       amount = {expenses[2].amount}
       date = {expenses[2].date}/>
    </div>
  )
}

export default App;