import { useEffect, useState } from 'react';

function wordle() {
  const [guesses, setGuesses] = useState(Array(6).fill(null));
  useEffect(() => {}, []);
  return (
    <div className="flex justify-center flex-col gap-3 py-50">
      {guesses.map((guess) => {
        return <Line guess={guess ?? ''} />;
      })}
    </div>
  );
}

function Line({ guess }) {
  const tiles = [];

  for (let i = 0; i < 5; i++) {
    const char = guess[i];
    tiles.push(
      <div key={i} className="tile w-16 h-16 border-white border !m-0 mt-20 ">
        {char}
      </div>,
    );
  }
  return <div className="line flex items-center gap-3">{tiles}</div>;
}

export default wordle;
