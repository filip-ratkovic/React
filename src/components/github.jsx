import { useState } from "react";
import { useEffect } from "react";
import "./App.css";
const Github = () => {
  const [facts, setFacts] = useState([]);

  
  function getFacts() {
    fetch("https://api.github.com/users/dzemildupljak")
      .then((res) => res.json())
      .then((res) => {
        setFacts(res)
        
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
      <button type="button" id="btn" >
        searchh
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