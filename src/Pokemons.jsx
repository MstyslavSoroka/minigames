import { useState, useEffect, useRef } from 'react';

function pokemons() {
  const [pokemon, setPokemon] = useState(null);
  const [diff, setDiff] = useState(5);
  const [points, setPoints] = useState(
    parseInt(localStorage.getItem('points')) || 0,
  );
  const [msg, setMsg] = useState('Make your guess');
  const pokemonRef = useRef();

  const fetchPokemon = async () => {
    try {
      const id = Math.floor(Math.random() * 898) + 1;
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const data = await response.json();
      setPokemon(data);
      setDiff(5);
      pokemonRef.current.value = '';
      console.log(`Answer: ${data.species.name}`);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!pokemon) return;

    const usrGuess = pokemonRef.current.value.trim().toLowerCase();

    if (usrGuess !== pokemon.species?.name && diff > 0) {
      setDiff(diff - 1);
      setMsg('Try again');
    } else if (diff === 0) {
      setMsg('You lost');
    } else {
      fetchPokemon();
      const newPoints = points + diff;
      setPoints(newPoints);
      localStorage.setItem('points', newPoints);
      setMsg(`You won scoring ${diff} points`);
    }
  };

  return (
    <>
      <div className="relative pt-50 pb-60 text-white">
        <p className="absolute right-10 top-10 bg-[#C04870] py-2 px-3 rounded-2xl font-bold">
          Points: {points}
        </p>
        {pokemon && (
          <img
            style={{ filter: `blur(${diff * 2}px)` }}
            className="w-50 m-auto ease-in-out duration-500"
            alt="pokemon"
            src={pokemon.sprites.front_default}
          />
        )}
        <div className="flex pt-10">
          <div className="bg-[#3A3F74] w-5/6  lg:w-1/3 py-5 px-5  rounded-2xl">
            <p className="text-center  text-lg md:text-2xl bg-[#C04870] py-1 px-10 rounded-lg">
              {msg}
            </p>
            <form
              className="flex flex-col items-center pt-5"
              onSubmit={handleSubmit}
            >
              <input
                type="text"
                className="text-center border-1 rounded-2xl py-2 w-full md:w-2/3"
                placeholder="type your guess here"
                ref={pokemonRef}
              />
              <div className="pt-5 flex gap-2">
                <button
                  type="submit"
                  className="bg-[#C04870] py-2 px-5 rounded-l-2xl ease-in  transition-normal duration-200 rounded-r-sm hover:pl-10 hover:cursor-pointer"
                >
                  Guess
                </button>
                <button
                  type="button"
                  className="bg-[#C04870] py-2 px-5 hover:pr-10 rounded-r-2xl ease-in  transition-normal duration-200 rounded-l-sm"
                  onClick={fetchPokemon}
                >
                  Next
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default pokemons;
