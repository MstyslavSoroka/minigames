import { useEffect, useState } from 'react';

function Wordle() {
  const [guesses, setGuesses] = useState(Array(6).fill(''));
  const [currentGuess, setCurrentGuess] = useState(0);
  const [word, setWord] = useState('');
  useEffect(() => {
    async function getWord() {
      try {
        const response = await fetch(
          'https://random-word-api.herokuapp.com/word?length=5',
        );
        const data = await response.json();
        setWord(data[0].toUpperCase());
        console.log(data[0]);
      } catch (error) {
        console.error(error);
      }
    }
    getWord();
  }, []);

  useEffect(() => {
    const handleKey = (e) => {
      const newGuesses = [...guesses];
      if (/^[a-zA-Z]$/.test(e.key) && guesses[currentGuess].length < 5) {
        newGuesses[currentGuess] += e.key.toUpperCase();
        setGuesses(newGuesses);
      } else if (e.key === 'Enter' && guesses[currentGuess].length === 5) {
        if (word == newGuesses[currentGuess]) {
          console.log('win');
        }
        if (currentGuess < 5) setCurrentGuess(currentGuess + 1);
      } else if (e.key === 'Backspace' && guesses[currentGuess].length > 0) {
        const newGuesses = [...guesses];
        newGuesses[currentGuess] = newGuesses[currentGuess].slice(0, -1);
        setGuesses(newGuesses);
      }
    };

    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [guesses, currentGuess]);

  return (
    <div className="flex justify-center flex-col gap-3 py-12">
      {guesses.map((guess, i) => (
        <Line key={i} guess={guess} />
      ))}
    </div>
  );
}

function Line({ guess }) {
  return (
    <div className="line flex items-center gap-3">
      {Array.from({ length: 5 }, (_, i) => (
        <div
          key={i}
          className="tile w-16 h-16 border-white border flex items-center justify-center text-2xl font-bold bg-white"
        >
          {guess[i] || ''}
        </div>
      ))}
    </div>
  );
}

export default Wordle;
