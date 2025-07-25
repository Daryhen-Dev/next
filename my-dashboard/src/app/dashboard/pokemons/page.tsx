
import React from 'react'
import { PokemonsResponse } from '@/pokemons/interfaces/pokemons-response'
import { SimplePokemon } from '@/pokemons/interfaces/simple-pokemon'
import { PokemonGrid } from '@/app/dashboard/pokemons/components/PokemonGrid'


const getPokemons = async(limit = 20, offset= 0):Promise<SimplePokemon[]> => {
    const data:PokemonsResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
    .then(rest => rest.json()
    )
    const pokemons = data.results.map(pokemon => ({
      id: pokemon.url.split('/').at(-2)!,
      name: pokemon.name,
    }))
   // throw new Error('Error al obtener los pokemons')
    return pokemons
}


export default async function PokemonsPage() {
    const pokemons = await getPokemons(151)

  return (
    <div className='flex flex-col'>
      <span className='text-5xl my-2'>Listado de Pókemons <small className='text-blue-500'>estático</small> </span>
        <PokemonGrid pokemons={pokemons} />
      {JSON.stringify(pokemons)}</div>
  )}
