import React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Quotes from "./Quotes";
import Header from "./ResHeader";
import ItemBox from "./ItemBox"
import CombinedBox from "./ListBox";


//* Homepage with Quotes!
function Home() {
    const navigate = useNavigate();
    return(
        <div className="home">
            <Quotes></Quotes>
            <button onClick={() => navigate("/MyCalories")}>Go to Your Calories</button>
        </div>
    );
}

//* Secondary page with Calorie tracker
function MyCalories() {
    return (
        <div className="myCaloriesPage">
            <Header></Header>
            <CombinedBox></CombinedBox>
            <ItemBox></ItemBox>
        </div>
    );
}

//* Primary Export Page
export default () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/MyCalories" element={<MyCalories />} />
            </Routes>
        </BrowserRouter>
    )
}