import React from 'react';
import gurkultImg from './images/parkingpage/gurkult.png';
import {shopURL, githubURL, discordInviteURL} from './constants';
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
                        <a href={shopURL} target="_blank" rel="noopener noreferrer">Store</a>
                    </li>
                    <li>
                        <a href={githubURL} target="_blank" rel="noopener noreferrer">Contribute</a>
                    </li>
                </ul>
            </div>
            <div className="textbody">
                <div className="header">
                    <h1 style={{color: "green", }}>Gurkult Headquarters</h1>
                    <a style={{textDecoration: "none", color: "white"}} href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstleyVEVO" target="_blank" rel="noopener noreferrer">const dataBasePass; const passHashes; const djangoSecret;</a>
                </div>
                <p>Thank you for taking interest in the Gurkult. This site is currently a parking page while the site is under construction. We hope to see you again when this website is complete.</p>
                <br/>
                <p>If you would like to contribute to this open source React site, visit our <a href={githubURL} target="_blank" rel="noopener noreferrer">Github</a></p>
                <p>Or if you would like to converse with other fellow gurkans, join our <a href={discordInviteURL} target="_blank" rel="noopener noreferrer">discord server</a></p>
            </div>
        </div>
        
    )
}