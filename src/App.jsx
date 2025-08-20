import { useState } from 'react';
import reactLogo from './assets/react.svg';
import Logo from './Logo';
import { NavLink } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div>
      <Logo />
      <div>
        <nav>
          <ul className="flex flex-wrap w-80 text-white">
            <li className="bg-blue-950 rounded1-lg p-5">
              <NavLink to="/">Dinosaur</NavLink>
            </li>
            <li className="bg-blue-950 rounded1-lg p-5">
              <NavLink to="/"> X</NavLink>
            </li>
            <li className="bg-blue-950 rounded1-lg p-5">
              <NavLink to="/">pokeguess</NavLink>
            </li>
            <li className="bg-blue-950 rounded1-lg p-5">
              <NavLink to="/">
                H <br />
                A <br />
                N <br />
                G <br />
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default App;
