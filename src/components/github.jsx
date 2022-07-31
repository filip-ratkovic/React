import { useState } from "react";
import { useEffect } from "react";
import "./App.css";
const Github = () => {
  const [facts, setFacts] = useState([]);
let searchValue = ""
  
  function getFacts(user) {
    fetch("https://api.github.com/users/"+ user)
      .then((res) => res.json())
      .then((data) => {
        setFacts(data)
        
      })
  }

  useEffect(() => {
    getFacts()
  }, [])

  console.log(facts);
  return <div>
    <div className="search">
      <input id="input" type="text" placeholder="Enter github username"
       onChange={(e) => {
          searchValue = e.target.value;
      }}
      />
      <button  onClick={() =>{
        getFacts(searchValue)
      }} type="button" id="btn" >
        Search
      </button>

      <div className="conteiner">
        <div className="left">
          <div className="image" >
            <img src={facts.avatar_url} alt="" />
          </div>
        </div>
        <div className="info">
          <h1>{facts.bio}</h1>;
          <h3>{facts.location}</h3>
          <h3>{facts.name}</h3>
          <h3>{facts.followers}</h3>
        </div>





      </div>
    </div>
  </div>
};

export default Github;