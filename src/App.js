import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Pokedex from './components/Pokedex';
import Searchbar from './components/Searchbar';
import { getPokemonData, getPokemons, searchPokemons } from './api';

const { useState, useEffect } = React;

function App() {
  const [pokemons, setPokemon] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);


  const fetchPokemons = async () => {
    try {
      setLoading(true);
      const data = await getPokemons(25, 25 * page);
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url);
      });
      const results = await Promise.all(promises);
      setPokemons(results);
      setLoading(false);
      setTotal(Math.ceil(data.count / 25));
    } catch (err) {}
  };

  useEffect(() => {

      fetchPokemons();
    
  }, [page]);

  return (
    <div>
      <Navbar />
      <div className="App">
        <Searchbar />
        {loading ? (
          <div>Cargando pokemones...</div>
        ) : (
          <Pokedex
            pokemons={pokemons}
            page={page}
            setPage={setPage}
          />
        )}
      </div>
    </div>
  );
};

export default App;
