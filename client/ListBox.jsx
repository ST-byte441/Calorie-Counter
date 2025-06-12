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
    const [input, setInput] = useState("")

    const addItem = () => {
        if (input.trim() !== "") {
            setItems([...items, input])
            setInput("")
        }
    }

    return (
        <div>
            <h2>List of Today's Calories</h2>
            <input
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
                placeholder="Add Item"
            />
            <button onClick={addItem}>Add</button>
            <ul>
                {items.map((item, idx) => (
                    <li key={idx}>{item}</li>
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