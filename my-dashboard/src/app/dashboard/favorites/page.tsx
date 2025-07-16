
import React from 'react'
import { PokemonGrid } from '@/app/dashboard/pokemons/components/PokemonGrid'
import { FavoritePokemons } from '../pokemons/components/FavoritePokemons'
import { IoHeartOutline } from 'react-icons/io5'


export const metadata = {
    title: 'Favoritos',
    description: 'Listado de pokemons favoritos',
}



export default async function PokemonsPage() {


  return (
    <div className='flex flex-col'>
      <span className='text-5xl my-2'>Listado de Pókemons <small className='text-blue-500'>Global state</small> </span>
       <FavoritePokemons />
      {/* {JSON.stringify(pokemons)} */}
      </div>
  )}


