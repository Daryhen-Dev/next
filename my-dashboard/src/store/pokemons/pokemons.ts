import { SimplePokemon } from '@/pokemons';
import { createSlice, PayloadAction } from '@reduxjs/toolkit'


interface PokemonsState {
   favorites: {[key: string]: SimplePokemon}
}

// const getInitialState = (): PokemonsState => {
//   if (typeof localStorage === 'undefined') return {}
//   const favorites = JSON.parse(localStorage.getItem('favorite-pokemons') || '{}');
//   return favorites;
// }
const initialState: PokemonsState = {
  favorites: {}
  //...getInitialState(),
    // '1':{id: 1, name: 'bulbasaur'},
    // '2':{id: 2, name: 'ivysaur'},
    // '3':{id: 3, name: 'venusaur'},
    // '4':{id: 4, name: 'charmander'},
}

const pokemonSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {

    setFavoritePokemons(state, action: PayloadAction<{[key: string]: SimplePokemon}>) {
      state.favorites = action.payload;
    },
    toggleFavorite(state, action: PayloadAction<SimplePokemon> ){

      const pokemons = action.payload;
      const {id} = pokemons;
      
      if(!!state.favorites[id]){
        delete state.favorites[id];
        //return;
      }else {
        state.favorites[id] = pokemons;
      }
      //TODO: no se debe de hacer en Redux
      localStorage.setItem('favorite-pokemons', JSON.stringify(state.favorites));
    }
  }
});

export const { toggleFavorite, setFavoritePokemons } = pokemonSlice.actions

export default pokemonSlice.reducer