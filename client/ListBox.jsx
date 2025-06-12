import React, { useState, useEffect} from "react";
import { BrowserRouter, Routes, Route, useNavigate, Link } from "react-router-dom";


function BoxLeft () {
    return (
        <div className="boxLeft"></div>
    )
}

function BoxRight () {
    return (
        <div className="boxRight"></div>
    )
}

function BoxPrimary ({ children }) {
    return (
        <div className="boxPrimary"> {children} </div>
    )
}

function ListBox () {
    const [items, setItems] = useState([]);
    const [itemName, setItemName] = useState("");
    const [itemCalories, setItemCalories] = useState("")

    useEffect(() => {
        fetch('/api/items')
            .then(res => res.json())
            .then(data => setItems(data));
    }, []);

    const addItem = async () => {
        if (itemName.trim() !== "" && itemCalories.trim() !== "") {
            const newItem = { name: itemName, calories: itemCalories };
            const res = await fetch('/api/items', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newItem)
            });
            const savedItem = await res.json();
            
            setItems([...items, savedItem])
            setItemName("");
            setItemCalories("");
        }
    }

    return (
        <div>
            <h2>List of Today's Calories</h2>
            <input
                type="text"
                value={itemName}
                onChange={e => setItemName(e.target.value)}
                placeholder="Add Item"
            />
            <input
                type="number"
                value={itemCalories}
                onChange={e => setItemCalories(e.target.value)}
                placeholder="Add Calorie Count"
                min="0"
            />
            <button onClick={addItem}>Add</button>
            <ul>
                {items.map((item, idx) => (
                    <li key={idx}>
                        {item.name} - {item.calories} cal
                    </li>
                ))}
            </ul>
        </div>
    )
}

function CombinedBox () {
    return (
        <div className="combinedBox">
            <BoxLeft></BoxLeft>
            <BoxPrimary> <ListBox> </ListBox> </BoxPrimary>
            <BoxRight></BoxRight>
        </div>
    )
}

export default CombinedBox