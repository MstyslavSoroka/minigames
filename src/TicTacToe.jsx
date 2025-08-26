import { useState } from 'react';

function TicTacToe() {
  const [player, setPlayer] = useState('X');
  const [cells, setCells] = useState(Array(9).fill(''));
  const [msg, setMsg] = useState("It's player X move");
  const [xCombo, setxCombo] = useState([]);
  const [oCombo, setoCombo] = useState([]);

  const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const handleClick = (i) => {
    if (cells[i] !== '' || msg.includes('Won')) return;

    const newCells = [...cells];
    newCells[i] = player;
    setCells(newCells);

    if (player === 'X') {
      const newXCombo = [...xCombo, i];
      setxCombo(newXCombo);
      if (!checkWin(newXCombo, 'X')) {
        setPlayer('O');
        setMsg("It's player O move");
      }
    } else {
      const newOCombo = [...oCombo, i];
      setoCombo(newOCombo);
      if (!checkWin(newOCombo, 'O')) {
        setPlayer('X');
        setMsg("It's player X move");
      }
    }
  };

  const checkWin = (comboArray, currentPlayer) => {
    for (let condition of winningConditions) {
      if (condition.every((index) => comboArray.includes(index))) {
        setMsg(`${currentPlayer} Won`);
        return true;
      }
    }
    if (cells.every((cell) => cell !== '')) {
      setMsg("It's a tie");
      return false;
    }
  };

  const resetGame = () => {
    setPlayer('X');
    setCells(Array(9).fill(''));
    setMsg("It's player X move");
    setxCombo([]);
    setoCombo([]);
  };

  return (
    <div className="pt-20">
      <h1 className="text-center pb-10 text-white text-2xl">
        Tic Tac Toe minigame
      </h1>
      <div className="field flex flex-wrap w-[300px] gap-5">
        {cells.map((value, i) => (
          <div
            key={i}
            className="cell w-20 h-20 bg-[#121212] text-white flex items-center justify-center text-2xl cursor-pointer"
            onClick={() => handleClick(i)}
          >
            {value}
          </div>
        ))}
      </div>
      <p className="message text-center text-white pt-10">{msg}</p>
      <div className="flex items-center pt-5 pb-55">
        <button
          onClick={resetGame}
          className="bg-[#C04870] py-3 px-6 rounded-2xl text-white font-bold ease-in duration-100 hover:px-10"
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default TicTacToe;
