import React, { Component } from "react";
import falsecheck from "./false.png";
import truecheck from "./true.png";
import "./carrds.css";
function cards() {
  return (
    <div className="cards-container">
      <div className="head">
        <h4>Joining the community</h4>
        <h1>Membership plans</h1>
      </div>
      <div className="cards">
        <div className="card non-gurkan">
          <h1>Non-Gurkan</h1>
          <ul>
            <li>
              <img
                src={falsecheck}
                alt="false check"
                className="card-icon"
              ></img>
              Having gurkan in your name
            </li>
            <li>
              <img
                src={falsecheck}
                alt="false check"
                className="card-icon"
              ></img>
              Being a part of a community
            </li>
            <li>
              <img
                src={falsecheck}
                alt="false check"
                className="card-icon"
              ></img>
              Influence in the future of Gurkult
            </li>
          </ul>
          <button>Leave now</button>
        </div>
        <div className="card non-gurkan">
          <h1>Gurkan</h1>
          <ul>
            <li>
              <img
                src={truecheck}
                alt="trues-check"
                className="card-icon"
              ></img>
              Having gurkan in your name
            </li>
            <li>
              <img
                src={truecheck}
                alt="false check"
                className="card-icon"
              ></img>
              Being a part of a community
            </li>
            <li>
              <img
                src={truecheck}
                alt="false check"
                className="card-icon"
              ></img>
              Influence in the future of Gurkult
            </li>
            <li>
              <img
                src={truecheck}
                alt="false check"
                className="card-icon"
              ></img>
              No commitment
            </li>
            <li>
              <img
                src={truecheck}
                alt="false check"
                className="card-icon"
              ></img>
              Free
            </li>
          </ul>
          <button>Become Gurkan</button>
        </div>
        <div className="card non-gurkan">
          <h1>Lord Gurkan</h1>
          <ul>
            <li>
              <img
                src={truecheck}
                alt="false check"
                className="card-icon"
              ></img>
              All Gurkan benefits
            </li>
            <li>
              <img
                src={truecheck}
                alt="false check"
                className="card-icon"
              ></img>
              Managing a part of Gurkult like finance adn language development
            </li>
            <li>
              <img
                src={truecheck}
                alt="false check"
                className="card-icon"
              ></img>
              Influence in the future of Gurkult
            </li>
          </ul>
          <button>Sign up now</button>
        </div>
      </div>
    </div>
  );
}

export default cards;
