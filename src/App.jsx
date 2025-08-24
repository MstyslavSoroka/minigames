import { useState } from 'react';
import controller from './assets/controller.png';
import { NavLink, Routes, Route } from 'react-router-dom';
import TicTacToe from './TicTacToe.jsx';
import './index.css';

function App() {
  return (
    <div>
      <NavLink to="/">
        <img
          className="w-60 !mt-20 animate-shake"
          src={controller}
          alt="Controller"
        />
      </NavLink>

      <div className="!mt-50">
        <nav className="flex items-centre m-0 m-auto">
          <ul className="flex flex-wrap w-[350px]  text-white gap-4">
            <li className="flex items-center">
              <NavLink
                className="bg-[#C04870] p-5 h-[64px] w-[118px] text-center rounded-l-2xl rounded-r-sm"
                to="/"
              >
                Dinosaur
              </NavLink>
            </li>
            <li className="flex items-center ">
              <NavLink className="bg-[#3A3F74]  p-5 rounded-sm" to="tictactoe">
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
      <Routes>
        <Route path="/tictactoe" element={<TicTacToe />} />
      </Routes>
    </div>
  );
}

export default App;
