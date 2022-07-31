import { useState, useEffect } from "react";
import TourCard from "./TourCard"
const url = "https://course-api.com/react-tours-project"

const Tours = () => {
  const [tours, setTours] = useState([]);

  async function fetchTours() {
    const res = await fetch(url);
    const data = await res.json();
    setTours(data);
    console.log(data);
  }



  useEffect(() => {
    fetchTours()
  }, [])

 
const onDelete = () => {
tours.map((tour,i) => {
    return (setTours(tours.filter((el,index)  => i!== index )))

})
}

  return (
    <div>
      {tours.map((tour,i,onDelete) => {
        return (
          <TourCard 
            tour={tour} key={tour.id} onDelete={onDelete} />
        )
      })}
    </div>


  )
}

export default Tours;