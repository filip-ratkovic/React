import { useState, useEffect } from "react";
import "./App.css";
import TourCard from "./components/TourCard"
const url = "https://course-api.com/react-tours-project"

const App = () => {
  const [tours, setTours] = useState([]);

  async function fetchTours() {
    const res = await fetch(url);
    const data = await res.json();
    setTours(data);
  }



  useEffect(() => {
    fetchTours()
  }, [])


  return (
 <div>
   {tours.map((tour) => {
return(
<TourCard tour={tour} key={tour.id}/>
  )
})}
 </div>

   
  )
}

export default App;