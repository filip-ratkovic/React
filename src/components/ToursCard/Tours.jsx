import React from "react";
import Tour from "./Tour"

const Tours = ({ tours, removeTour }) => {
  return (
    <section>
      <div className="tourse-tittle">
        <h1>Ours tours</h1>
      </div>
      <div className="underline">
      </div>
      <div>
       {tours.map((tour) => {
        return <Tour id={tour.id} {...tour} removeTour={removeTour} />
        })}
      </div>
    </section>
  )
}

export default Tours;