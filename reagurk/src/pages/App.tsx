import React from 'react';
import Hero from '../components/hero';
import Footer from '../components/footer';

export default function App(): JSX.Element {
  return (
    <div className="App">
      <body className="relative bg-white dark:bg-gray-800 overflow-hidden">
        <Hero />
        <Footer/>
      </body>
    </div>
  );
}