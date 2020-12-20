import React from 'react';
import HeroBanner from "./components/HeroBanner";
import NavBar from "./components/NavBar";
import {ParkingPage} from "./components/ParkingPage";
import './App.css';

function App() {
  return (
    <>
      <NavBar />
      <HeroBanner />
    <div>
    <ParkingPage />
    </div>
    </>
  );
}

export default App;
