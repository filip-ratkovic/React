const TourCard = ({ tour }) => {
  return (
    <div className="tours-cont">
      <img src={tour.image} alt={tour.name} />
      <div className="tours-text">
        <div className="tours-info">
          <h3>{tour.name}</h3>
          <p> Price  {tour.price}</p>
        </div>
        <p>{tour.info}</p>

        <button onClick={onDelete}>Not interested</button>
      </div>

    </div>
  )
}


export default TourCard;
