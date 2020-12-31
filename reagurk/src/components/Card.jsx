import React from 'react';
import "./Card.css";
import benefitImg from "./images/parkingpage/checkmark.png";

export function Card(props){
    const benefitsList = props.benefits.map((benefit) => <li><img className="checkmark" src={benefitImg} alt="checkmark"/>{benefit}</li>);
    return (
        <div className="card">
            <h1>{ props.title }</h1>
            <ul>{benefitsList}</ul>
            <button className={"cardButton " + (props.joinButton ? "join" : "learnMore")}>{props.joinButton ? "Sign Up Now" : "Learn More"}</button>
        </div>
    )
}