import React, { useState, useEffect} from "react";
import { BrowserRouter, Routes, Route, useNavigate, Link } from "react-router-dom";

function ItemBox ( {onAddFood} ) {
    const [showNewItems, setShowNewItems] = useState(false);
    const presetFood = [
        { name: "Bowl of white rice", calories: 200},
        { name: "2X Spicy Buldak", calories: 550},
        { name: "Boiled Egg", calories: 78},
        { name: "1/2 cup of Potato Salad", calories: 179},
        { name: "Ribeye Steak (227g)", calories: 560}
    ]

    const toggleItems = () => {
        setShowNewItems(prevState => !prevState);
    }

    return (
        <div className="item-box">
            <div className="arrow-container" onClick={toggleItems}>
                {/* <img src='./assets/upArrow.png' alt="Toggle Arrow" className="arrow-img"></img> */}
                <span className={`arrow ${showNewItems ? 'up' : 'down'}`}></span>
            </div>

            {showNewItems && (
                <div className="new-items">
                    <ul>
                        {presetFood.map((item, idx) => (
                            <li key={idx}>
                                <button onClick={() => onAddFood(item)}>
                                    {item.name} ({item.calories} cal)
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )
}

export default ItemBox;