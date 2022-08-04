import { useState } from "react";
import { useEffect } from "react";
import React from "react"
import Tours from "./Tours"
import Loading from "./Loading"
import "./Tours.css";
const url = "https://course-api.com/react-tours-project"

const TourCard = () => {
    const [loading, setLoading] = useState(true);
    const [tours, setTours] = useState();

    const removeTour = (id) => {
        const newTours = tours.filter((tour) => tour.id !== id);
        setTours(newTours);
    }

    const fetchTours = async () => {
        setLoading(true);
        try {
            const response = await fetch(url);
            const tours = await response.json();
            setLoading(false);
            setTours(tours);
        } catch (err) {
            setLoading(false);
            console.log(err);
        }
    }

    useEffect(() => {
        fetchTours()
    }, [])

    if (loading) {
        return (
            <main>
                <Loading />
            </main>
        )
    }

    if (tours.length === 0) {
        return <main>
            <h3>No more tours</h3>
            <button onClick={fetchTours}>Refresh</button>
        </main>
    }

    return (
        <main>
            <Tours tours = {tours} removeTour={removeTour} />
        </main>
    )


};

export default TourCard;