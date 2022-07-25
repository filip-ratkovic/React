import { useState, useEffect } from "react";
import DessertCard from "./components/DessertCard";
import "./App.css";

const App = () => {
  const [desserts, setDesserts] = useState([]);
  let size = 2;

  function dessertData() {
    fetch(`https://random-data-api.com/api/dessert/random_dessert?size=${size}`)
      .then((res) => res.json())
      .then((data) => {
        setDesserts(data)
      })
  }

  useEffect(() => {
    dessertData();
  }, [])



  return (
    <div>
      <div className="search">
        <input type="text" placeholder="enter a number" onChange={(e) => {
          size = e.target.value;
        }} />
        <button onClick={() => {
          dessertData(size)
        }} > Submit</button>
      </div>
      
      {desserts.map((dessert) => {
        return <DessertCard des={dessert} key={dessert.uid} />;
      })}

    </div>

  )
}

export default App;