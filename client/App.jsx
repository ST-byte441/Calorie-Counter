import React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Quotes from "./Quotes";

function Home() {
    const navigate = useNavigate();
    return(
        <div className="home">
            {/* <h1>Solo Project</h1> */}
            <Quotes></Quotes>
            <button onClick={() => navigate("/about")}>Go to About Page</button>
        </div>
    );
}

function About() {
    return (
        <div>
            <h1>About Page</h1>
            <button onClick={() => window.history.back()}>Go Back</button>
        </div>
    );
}


export default () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </BrowserRouter>
    )
}