import React, { useState } from "react"
import axios from "axios"

const PokeList = () => {
    const [pokemon, setPokemon] = useState([])
    const url = "https://pokeapi.co/api/v2/pokemon?limit=50&offset=0"

    const fetchPokemon = async () => {
        const { data } = await axios.get(url)
        setPokemon(data.results)
    }

    return (
        <div>
            <h1>Your Pokelist</h1>
            <button onClick={fetchPokemon}>Show Pokemon</button>
            {pokemon.length > 0 ? (
                <ul aria-label="pokemon-list">
                    {pokemon.map((poke: any) => (
                        <li key={poke.name} aria-label="pokemon">{poke.name}</li>
                    ))}
                </ul>
            ) : null}
        </div>
    )
}

export default PokeList
