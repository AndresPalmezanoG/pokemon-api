import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Pokedex from './components/Pokedex';
import Searchbar from './components/Searchbar';
import { getPokemons } from './api';

const {useState, useEffect} = React;

function App() {
  const [pokemons, setPokemon] = useState([]);

  const fetchPokemons = async () => {
    try {
      const data = await getPokemons();
      console.log(data);
    } catch (err){
      
    }
  }

  useEffect(() => {
      console.log("Inside useEffect")
  }, [])

  return (
    <div>
      <Navbar />
      <div className="App">
        <Searchbar />
        <Pokedex />
      </div>
    </div>
  );
}

export default App;
