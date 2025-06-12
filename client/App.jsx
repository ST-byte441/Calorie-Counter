import React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Quotes from "./Quotes";
import Header from "./ResHeader";
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
    const [calorieCap, setCalorieCap] = useState(2000);
    const [refreshFlag, setRefreshFlag] = useState(false); // toggle for dynamic refresh

    // Post request to add items to MongoDB. Needed here to run thru CombinedBox
    const addFood = async (item) => {
        await fetch('/api/items', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(item)
        });
        setRefreshFlag(flag => !flag); // Dynamic Refresh
    };


    return (
        <div className="myCaloriesPage">
            <Header calories={calorieCap} setCalories={setCalorieCap}></Header>
            <CombinedBox calorieCap={calorieCap} onAddFood={addFood} refreshFlag={refreshFlag}></CombinedBox>
        </div>
    );
}

//* Side pages
function Secret() {
    return (
        <div className="secretPage">
            <h1>You're not supposed to be here</h1>
            <h2>"Upcoming features"</h2>
            <ul>
                <li>More cards!</li>
                <li>Add presets directly</li>
                <li>Move Presets into a toolbar</li>
                <li>More Cards with more stats! i.e: Monthly tracker</li>
                <li>Auto-clear primary box list at the end of the day</li>
                <li>Improve database rendering speed</li>
            </ul>
        </div>
    )
}

//* Primary Export Page
export default () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/MyCalories" element={<MyCalories />} />
                <Route path="/Secret" element={<Secret />} />
            </Routes>
        </BrowserRouter>
    )
}