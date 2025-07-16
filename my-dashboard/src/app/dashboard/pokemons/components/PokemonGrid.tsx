import { SimplePokemon } from '@/app/pokemons'
import React from 'react'
import { PokemonCard } from './PokemonCard'

interface Props {
    pokemons: SimplePokemon[]
}

export const PokemonGrid =( {pokemons}: Props) => {
  return (
        <div className='flex flex-wrap gap-10 items-center justify-center'>
        {
          pokemons.map(pokemon => (
            // <div key={pokemon.id} className='flex flex-col items-center'>
            //   <Image src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`} width={100} height={100}/>
            //   <span className='capitalize'>{pokemon.name}</span>
            // </div>
            // <span key={pokemon.id}>asdas</span>
            <PokemonCard key={pokemon.id} pokemon={pokemon}/>
          ))
        }
      </div>
  )
}
