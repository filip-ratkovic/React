import { useState, useEffect } from "react";
import React from "react";
import Movie from "./Movie/Movie";
import {Route, Routes, Link} from "react-router-dom";
import Tours from "./components/ToursCard/Tours";
import TourCard from "./components/ToursCard/TourCard"

const App = () => {
    return(

        <div>
            <div>
               <Link to="/home"><button>Home</button></Link>
               <Link to="/tours"><button>Tourse</button></Link> 

            </div>
        <Routes>
        <Route path={"/"}  element={<h1>Welcome</h1>}/>
        <Route path={"/home"}  element={<h1>Gde si dariseee</h1>}/>
        <Route path={"/tours"}  element={<TourCard/>}/>
    </Routes>
    </div> 
        )
}

export default App;