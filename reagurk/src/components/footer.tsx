import React from 'react';
import footerLogo from '../assets/footer-logo.png';
import githubIcon from '../assets/icons8-github.svg';
import discordIcon from '../assets/Discord-Logo-White.svg';
import { serverInvite, github } from '../constants';


export default function Footer(): JSX.Element {
  return (
    <>
      <footer className="text-gray-400 bg-gray-800 body-font md:fixed inset-x-0 bottom-0">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col sm:ml-auto">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
            <img src={footerLogo} alt="gurkult logo" />
            <span className="ml-3 text-xl">Gurkult</span>
          </a>
          <p className="text-sm text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4">
            Made with ♥ in Gurkland
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <a className="text-gray-400" target="_blank" rel="noreferrer" href={github}>
              <img className="w-10 pt-6" src={githubIcon} />
            </a>
            <a className="ml-3 text-gray-400" target="_blank" rel="noreferrer" href={serverInvite}>
              <img className="w-10 pt-7" src={discordIcon} />
            </a>
          </span>
        </div>
      </footer>
    </>
  );
}