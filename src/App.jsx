import { useState } from "react";
import { useEffect } from "react";
import DessertCard from "./components/DessertCard";
import "./App.css";
const App = () => {
  const [dessert, setDesserts] = useState([]);
let size = 0;
  function desertData() {
    fetch(`https://random-data-api.com/api/dessert/random_dessert?size=${size}`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setDesserts(res)
        
      })
  }

  useEffect(() => {
desertData()
  },[])



  return (
    <div>
<div className="search">
  <input type="text" placeholder="enter a number"  onChange={(e) => {
            size = e.target.value;
          }} />
  <button onClick={() => {
desertData()
  }} > click</button>
</div>
    {dessert.map((e)=>{
       return <DessertCard des={dessert} key={dessert.uid}/>
      })}
    
      </div>

  )
}

export default App;