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
    if (cells[i] !== '' || msg.includes('Won')) {
      return;
    }
    const newCells = [...cells];
    newCells[i] = player;
    setCells(newCells);

    if (player === 'X') {
      const newXCombo = [...xCombo, i];
      setxCombo(newXCombo);
      if (!checkWin(newXCombo, 'X')) {
        setPlayer('O');
        setMsg(`It's player O move`);
      }
    } else {
      const newOCombo = [...oCombo, i];
      setoCombo(newOCombo);
      if (!checkWin(newOCombo, 'O')) {
        setPlayer('X');
        setMsg(`It's player X move`);
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
    if (cells.every((cell) => cell != '')) {
      setMsg("It's a tie");
      return false;
    }
  };

  return (
    <div className="pt-20">
      <h1 className="text-center pb-10 text-white text-2xl ">
        Tic Tac Toe minigame
      </h1>
      <div className="field flex flex-wrap w-[300px] gap-5">
        {cells.map((value, i) => (
          <div
            key={i}
            id={`cell${i + 1}`}
            className="cell w-20 h-20 bg-[#121212] text-white items-center flex justify-center text-2xl"
            onClick={() => handleClick(i)}
          >
            {value}
          </div>
        ))}
      </div>
      <p className="message text-center text-white pt-10 pb-55">{msg}</p>
    </div>
  );
}

export default TicTacToe;
