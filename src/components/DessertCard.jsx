const DessertCard= ({des}) => {
    return (
        <div className="conteiner">
          <h1>{ "Flavor is " + des.flavor}</h1>
          <p>{ "Id is " + des.id}</p>
          <p>{ "Topping is " + des.topping}</p>
          <p>{ "Variety is " + des.variety}</p>
        </div>
      )
}


export default DessertCard;
