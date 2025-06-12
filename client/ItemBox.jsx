import React, { useState, useEffect} from "react";
import { BrowserRouter, Routes, Route, useNavigate, Link } from "react-router-dom";

function ItemBox () {
    const [showNewItems, setShowNewItems] = useState(false);

    const toggleItems = () => {
        setShowNewItems(prevState => !prevState);
    }

    return (
        <div className="item-box">
            <div className="arrow-container" onClick={toggleItems}>
                <img src='./assets/upArrow.png' alt="Toggle Arrow" className="arrow-img"></img>
                <span className={`arrow ${showNewItems ? 'up' : 'down'}`}></span>
            </div>

            {showNewItems && (
                <div className="new-items">
                    {/*Render my new items, e.g., a list */}
                    <ul>
                        <li>New Item 1</li>
                        <li>New Item 2</li>
                    </ul>
                </div>
            )}
        </div>
    )
}

export default ItemBox;