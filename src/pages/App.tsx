import React from "react";
import Hero from "../components/hero";
import gurkultLogo from "../assets/logo.png";

export default function App() {
  return (
    <div className="App">
      <head>
        <meta charSet="utf-8" />
        <title>Gurkult</title>
        <meta name="description" content="The home for the Gurkans" />

        <meta property="og:title" content="Title Here" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="http://www.gurkult.com/" />
        <meta property="og:image" content={gurkultLogo} />
        <meta property="og:description" content="Description Here" />

        <meta name="twitter:card" content="The home for the Gurkans" />
        <meta name="twitter:title" content="Page Title" />
        <meta name="twitter:description" content="Gurkult" />
        <meta name="twitter:image" content={gurkultLogo} />

        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </head>
      <body className="relative bg-white dark:bg-gray-800 overflow-hidden">
        <Hero />
      </body>
    </div>
  );
}