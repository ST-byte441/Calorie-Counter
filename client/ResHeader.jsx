import React, { useState, useEffect} from "react";
import { BrowserRouter, Routes, Route, useNavigate, Link } from "react-router-dom";

function Header({ calories, setCalories }) {
    return (
        <div className="header">
            <a href="#default" class="logo">Let's count calories!</a>
            <div className="dailyCalorieSetter">
                <label for="quantity">Daily Calories Cap: </label>
                <input 
                    type="number" 
                    id="quantity" 
                    name="quantity" 
                    value={calories} 
                    onChange={e => setCalories(Number(e.target.value))}></input>
            </div>
            <div className="header-right">
                <Link className="active" to="/">Inspirational Quote</Link>
                <a href="#contact">Complaint Form</a>
                <a href="#about">Nutritional Info</a>
            </div>
        </div>
    )
}

export default Header;