import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/App';
import './styles/index.css';
import gurkultLogo from './assets/logo.png';

ReactDOM.render(
  <React.StrictMode>
    <head>
      <meta charSet="utf-8" />
      <title>Gurkult | Open Source Community</title>
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
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
