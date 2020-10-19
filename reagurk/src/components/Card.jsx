import React from 'react';
import "./Card.css";

export function Card(){
    return (
        <div className="card">
            <h1>Gurkan</h1>
            <ul>
                <li>Hello</li>
                <li>World</li>
            </ul>
            <button className="joinButton">Sign Up Now</button>
        </div>
    )
}