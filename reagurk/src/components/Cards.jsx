import React from 'react';
import {Card} from "./Card"
import "./Cards.css";

export function Cards(){
    const nonGurkanBenefits = ["None", "pretty much nothing", "we will be sad"];
    const gurkanBenefits = ["Community", "Contributing", "Knowledge"];
    const gurkanLordBenefits = ["Power", "All-knowing", "Leadership"];
    return (
        <div className="cards">
            {/* <div className="card-bg"></div> */}
            <Card title="Non-Gurkan" benefits={nonGurkanBenefits}/>
            <Card title="Gurkan" joinButton={true} benefits={gurkanBenefits}/>
            <Card title="Lord Gurkan" benefits={gurkanLordBenefits}/>
        </div>
    )
}