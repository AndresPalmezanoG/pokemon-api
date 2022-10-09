import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Pokedex from './components/Pokedex';
import Searchbar from './components/Searchbar';
import { getPokemonData, getPokemons } from './api';

const { useState, useEffect } = React;

function App() {
  const [pokemons, setPokemon] = useState([]);
  const [page, setPage] = useState();
  const [total, setTotal] = useState();
  const [loading, setLoading] = useState();


  const fetchPokemons = async () => {
    try {
      const data = await getPokemons();
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url);
      })
      const results = await Promise.all(promises)
      setPokemon(results)
    } catch (err) {

    }
  }

  useEffect(() => {
    fetchPokemons();
  }, [])

  return (
    <div>
      <Navbar />
      <div className="App">
        <Searchbar />
        {loading ? (
          <div>Cargando pokemones...</div>
        ) : (
          <Pokedex pokemons={pokemons} />
        )}
      </div>
    </div>
  );
};

export default App;
