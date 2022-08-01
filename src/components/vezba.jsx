import { useState, useEffect } from "react";
import React from "react";
import axios from "axios"
const Vezba = () => {
    const axios = require("axios");

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
    const [data, setData] = useState([]);
    const [inputedDate, setInputedDate] = useState([])

    const fetchNumberData = async () => {
        const res = await axios.request(options).catch((error) => console.log(error));
        setData(res);
    }


    useEffect(() => {
        fetchNumberData()
    }, [])

    const search = () => {
        options.url = "https://numbersapi.p.rapidapi.com/" + inputedDate + "/date"
        fetchNumberData()
    }

    return (
        <div>
            <input type="text" placeholder="Datum" onChange={(input) => setData(input.target.value)} />
            <button onClick={search}>click</button>

        </div>
    )
}

export default Vezba;