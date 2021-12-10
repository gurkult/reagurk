import React from 'react';

export {};

export default function Footer(): JSX.Element {

  return (

    <>
    
      <footer className="text-gray-400 bg-gray-800 body-font fixed
             inset-x-0
             bottom-0">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
            <img src="https://cdn.discordapp.com/emojis/792081164466126868.png?size=56" alt="gurkult logo" />
            <span className="ml-3 text-xl">Gurkult</span>
          </a>
          <p className="text-sm text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4">© 2021 Gurkult 
           
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <a className="text-gray-400"
              href='https://github.com/gurkult'>
              <img src="https://img.icons8.com/ios-glyphs/50/ffffff/github.png" alt="github logo" />
            </a>
            <a className="ml-3 text-gray-400"
              href='https://discord.gg/W9DSfryp8Y'>
              <img src="https://img.icons8.com/fluency-systems-filled/48/ffffff/discord-logo.png"/>
               
            </a>
            
          </span>
        </div>
      </footer> 
    </>

  ); 

}