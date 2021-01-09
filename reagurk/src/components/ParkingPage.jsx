import React from 'react';
import {githubURL} from './constants';
import './ParkingPage.css';
import {Navbar} from './Navbar'
export function ParkingPage(){
    return (
        <div className="content">
            <Navbar />
            <div className="textbody">
                <div className="header">
                    <h1 style={{color: "green", }}>Gurkult Headquarters</h1>
                    <a style={{textDecoration: "none", color: "white"}} href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstleyVEVO" target="_blank" rel="noopener noreferrer">const dataBasePass; const passHashes; const djangoSecret;</a>
                </div>
                <p>Thank you for taking interest in the Gurkult. This site is currently a parking page while the site is under construction. We hope to see you again when this website is complete.</p>
                <br/>
                <p>If you would like to contribute to this open source React site, visit our <a href={githubURL} target="_blank" rel="noopener noreferrer">Github</a></p>
            </div>
        </div>
        
    )
}