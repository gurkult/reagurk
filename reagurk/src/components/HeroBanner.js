import React, { Component } from 'react';
import bannerImg from './images/herobanner/gurkans.jpg';
import './HeroBanner.css';
import './style.css';

class HeroBanner extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="hero-banner">
                <div className="hero-title title-header primary">
                    <h1>Gurkan Gang</h1>
                </div>
                <img src={bannerImg} alt="A large banner"/>
            </div>
         );
    }
}
 
export default HeroBanner;