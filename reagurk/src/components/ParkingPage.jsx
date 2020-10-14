import React from 'react';
import gurkultImg from './images/parkingpage/gurkult.png';
import {shopURL} from './constants';
import './ParkingPage.css';

export function ParkingPage(){
    return (
        <div className="content">
            <div className="navbar">
                <ul>
                    <li>
                        <img src={gurkultImg} className="icon" alt="The gurkan"/>
                    </li>

                    <li>
                        <a href={shopURL} target="_blank">Store</a>
                    </li>
                </ul>
            </div>
            <div className="textbody">
                <div className="header">
                    <h1 style={{color: "green", }}>Gurkult Headquarters</h1>
                    <a style={{textDecoration: "none", color: "white"}} href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstleyVEVO" target="_blank">const dataBasePass; const passHashes; const djangoSecret;</a>
                </div>
                <p>Thank you for taking interest in the Gurkult. This site is currently a parking page while the site is under construction. We hope to see you again when this website is complete.</p>
            </div>
        </div>
        
    )
}