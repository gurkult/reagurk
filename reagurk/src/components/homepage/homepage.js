import "./homepage.css";
import Cards from "../cards/cards";
import React, { Component } from "react";

class homepage extends Component {
  render() {
    return (
      <div className="homepage">
        <header className="cucumber-header">
          <div className="content">
            <h1>An open source community</h1>
            <p>
              Some nice text about the cult which describes ourcult. We'll just
              wright some random things about this.. Join us and get all member
              benefits for free!. Great to do for you
            </p>
            <button>Join us now</button>
          </div>
        </header>
        <Cards />
      </div>
    );
  }
}

export default homepage;
