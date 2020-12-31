import React from 'react';
import {Card} from "./Card"
import "./Cards.css";

export function Cards(){
    return (
        <div className="cards">
            {/* <div className="card-bg"></div> */}
            <Card />
            <Card />
            <Card />
        </div>
    )
}