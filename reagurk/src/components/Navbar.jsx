import React from 'react';
import { NavLink } from 'react-router-dom';
import gurkultImg from './images/parkingpage/gurkult.png';
import { shopURL, githubURL } from './constants';
import './Navbar.css';

export function Navbar() {
    return (
        <div className="content">
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap" rel="stylesheet" />
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous" />
            <div className="navbar">
                <ul>
                    <li>
                        <img src={gurkultImg} className="icon" alt="The gurkan" />
                    </li>
                    <li>
                        <a href="/" target="_blank" rel="noopener noreferrer"><b>Home</b></a>
                    </li>
                    <li>
                        <a href={shopURL} target="_blank" rel="noopener noreferrer">Store</a>
                    </li>
                    <li>
                        <a href={githubURL} target="_blank" rel="noopener noreferrer">Contribute</a>
                    </li>
                    
                    <li>
                        <NavLink target="_blank" to="/discord">Discord Server</NavLink>
                    </li>
                    <li>
                        <a href="/" target="_blank" rel="noopener noreferrer">
                        <button type="button" class="btn signup">Join Us</button>
                        </a>
                    </li>
                    <li>
                        <a href="/" target="_blank" rel="noopener noreferrer">
                        <button type="button" class="btn btn-outline-light">Log In</button>
                        </a>
                    </li>
                </ul>
            </div>
        </div>

    )
}