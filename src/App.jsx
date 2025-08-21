import { useState } from 'react';
import controller from './assets/controller.png';
import { NavLink } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div>
      <img className="w-60 !mt-20" src={controller} alt="Controller" />

      <div className="!mt-50">
        <nav>
          <ul className="flex flex-wrap w-83  text-white gap-4">
            <li className="flex items-center">
              <NavLink
                className="bg-[#C04870] p-5 h-[64px] w-[118px] text-center rounded-l-2xl rounded-r-sm"
                to="/"
              >
                Dinosaur
              </NavLink>
            </li>
            <li className="flex items-center ">
              <NavLink className="bg-[#3A3F74]  p-5 rounded-sm" to="/">
                {' '}
                X
              </NavLink>
            </li>
            <li className="flex items-center">
              <NavLink
                className="bg-[#C04870] p-5 h-[64px] w-[118px] text-center rounded-r-2xl rounded-l-sm"
                to="/"
              >
                pokemons
              </NavLink>
            </li>
            <li className="flex items-center">
              <NavLink
                className="bg-[#C04870] p-5 w-[50px] rounded-b-2xl  rounded-t-sm"
                to="/"
              >
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
