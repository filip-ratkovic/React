import { useState, useEffect } from "react";
import React from "react";
import axios from "axios"
const App = () => {
    const axios = require("axios");
const [newsData, setNewsData] = useState("");
let inputedDate = "";

const options = {
    method: 'GET',
    url: 'https://numbersapi.p.rapidapi.com/6/21/date',
    params: { fragment: 'true', json: 'true' },
    headers: {
        'X-RapidAPI-Key': '40b2a63a8cmsh465bf0c5b2ab485p1add32jsnf62aaa87247d',
        'X-RapidAPI-Host': 'numbersapi.p.rapidapi.com'
    }
};

axios.request(options).then(function (response) {
    console.log(response.data);
}).catch(function (error) {
    console.error(error);
});

const fetchNewsData = async () => {
    const res = await axios.request(options).catch((error) => console.log(error));
   setNewsData(res.data)
}

useEffect(() => {
fetchNewsData()
},[])

const search = () => {
    options.url = "https://numbersapi.p.rapidapi.com/" + inputedDate + "/date"
    fetchNewsData()
}

return (
    <div>
        <input type="text" placeholder="Datum" onChange={(input) =>inputedDate= input.target.value} />
        <button onClick={search}>click</button>

        <div>
            <h1>{newsData.year}</h1>
            <h4>{newsData.text}</h4>

        </div>
    </div>
    
)
}

export default App;