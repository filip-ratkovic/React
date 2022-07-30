const TourCard= ({tour}) => {
    return (
        <div className="tours-cont">
         <img src={tour.image} alt={tour.name} />
         <h1>{tour.name}</h1>

        </div>
      )
}


export default TourCard;
