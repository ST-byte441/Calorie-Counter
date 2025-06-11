import React, { useState, useEffect} from "react";
import { BrowserRouter, Routes, Route, useNavigate, Link } from "react-router-dom";

function Header() {
    const [calories, setCalories] = useState(2000)

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
                <Link className="active" to="/">Home</Link>
                <a href="#contact">Contact</a>
                <a href="#about">About</a>
            </div>
        </div>
    )
}

export default Header;