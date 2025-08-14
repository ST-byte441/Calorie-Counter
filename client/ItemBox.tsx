import React, { useState, useEffect} from "react";
import { BrowserRouter, Routes, Route, useNavigate, Link } from "react-router-dom";

function ItemBox ( {onAddFood} ) {
    const [showNewItems, setShowNewItems] = useState(false);
    const [preset, setPreset] = useState<{ name: string; calories: number }[]>([]);
    const [presetName, setPresetName] = useState("");
    const [presetCalories, setPresetCalories] = useState("")

    const presetFood = [
        { name: "Bowl of white rice", calories: 200},
        { name: "2X Spicy Buldak", calories: 550},
        { name: "Boiled Egg", calories: 78},
        { name: "1/2 cup of Potato Salad", calories: 179},
        { name: "Ribeye Steak (227g)", calories: 560}
    ];

    const toggleItems = () => {
        setShowNewItems(prevState => !prevState);
    }

    const addPreset = async () => {
        if (presetName.trim() !== "" && presetCalories.trim() !== "") {
            const newPreset = { name: presetName, calories: presetCalories };
            const res = await fetch('/api/preset', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newPreset)
            });
            const savedPreset = await res.json();
            
            setPreset([...preset, savedPreset])
            setPresetName("");
            setPresetCalories("");
        }
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
                <input
                    type="text"
                    value={presetName}
                    onChange={e => setPresetName(e.target.value)}
                    placeholder="Request a new preset item"
                />
                <input
                    type="number"
                    value={presetCalories}
                    onChange={e => setPresetCalories(e.target.value)}
                    placeholder="Add Calorie Count"
                    min="0"
                />
                <button onClick={addPreset}>Send Request</button>
                </div>
            )}

        </div>
    )
}

export default ItemBox;