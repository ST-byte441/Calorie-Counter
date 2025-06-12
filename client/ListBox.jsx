import React, { useState, useEffect} from "react";
import { BrowserRouter, Routes, Route, useNavigate, Link } from "react-router-dom";
import ItemBox from "./ItemBox";


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

function ListBox ({ calorieCap, food, setFood }) {
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

    const deleteItem = async (id) => {
        await fetch(`/api/items/${id}`, {
            method: 'DELETE',
        });
        setItems(items.filter(item => item._id !== id))
    }

    const totalCalories = items.reduce((sum, item) => sum + Number(item.calories), 0);
    function calcPercent(partial, total, decimalPlace = 2) {
        if (total === 0) {
            return "0.00%"
        }
        let percentage = (partial / total) * 100;

        return percentage.toFixed(decimalPlace) + "%"

    }
    const currentPercent = calcPercent(totalCalories, calorieCap);

    return (
        <div className="listBox">
            <h2>List of Today's Calories</h2>
            <div>
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
            </div>
            <ul>
                {items.map((item) => (
                    <li key={item._id} className="listItemRow">
                        {item.name} - {item.calories} cal
                        <button
                        className="deleteButton"
                        onClick={() => deleteItem(item._id)}
                        aria-label="Delete"
                        >
                        x    
                        </button>
                    </li>
                ))}
            </ul>
            <div className="totalCaloriesNum">Total Calories for the day: {totalCalories}</div>
            <div>Daily Calorie Cap: <span 
                id="currentPercent"
                style={{
                    fontWeight: "bold",
                    color: Number(currentPercent.replace('%','')) > 100 ? "red" : "#32CD32"
                }}
                >
                {currentPercent}
                </span>
            </div>
        </div>
    )
}

function CombinedBox ( { calorieCap, food, setFood, onAddFood }) {
    return (
        <div className="combinedBox">
            <BoxLeft></BoxLeft>
            <BoxPrimary> 
                <ListBox 
                    calorieCap = {calorieCap} 
                    food ={food} 
                    setFood={setFood}> 
                </ListBox> 
                <ItemBox onAddFood={onAddFood}></ItemBox>
            </BoxPrimary>
            <BoxRight></BoxRight>
        </div>
    )
}

export default CombinedBox