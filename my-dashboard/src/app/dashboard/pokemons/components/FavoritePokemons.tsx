'use client'
import React, { useEffect, useState } from 'react'
import { PokemonGrid } from './PokemonGrid'
import { useAppSelector } from '@/store'
import { IoHeartOutline } from 'react-icons/io5'

export const FavoritePokemons = () => {
    const FavoritePokemons = useAppSelector(state => Object.values(state.pokemons.favorites));
  //  const [pokemons, setPokemons] = useState(FavoritePokemons);

    // useEffect(() => {
    //     setPokemons(FavoritePokemons);
    // },[FavoritePokemons])

  return (
    <>
        {
        FavoritePokemons.length === 0 ? (<NoFavorites/>) : (
            <PokemonGrid pokemons={FavoritePokemons} />
        )
    }
    </>

  )
}


  export const NoFavorites = () => {
    return (
      <div className='flex flex-col h-[50vh] items-center justify-center'>
        <IoHeartOutline size={100} className='text-red-500' />
        <span className='text-2xl text-gray-500'>No hay favoritos</span>
      </div>
    )
  }