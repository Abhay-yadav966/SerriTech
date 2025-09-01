import { create } from 'zustand'

const useStore = create((set, get) => ({
  // Array data
  Pokemons: [],
  
  // Object data
  PokemonDetails: null,

  // Loading
  isLoading: false,

  // loading
  setLoading: (loading) => set(() => ({
    isLoading: loading
  })),

  addPokemons: (item) => set(() => ({
    Pokemons: [...item]
  })),

  clearPokemons: () => set(() => ({
    Pokemons: []
  })),

  addPokemonDetails: (details) => set(() => ({
    PokemonDetails: { ...details }
  })),

  resetUserProfile: () => set(() => ({
    PokemonDetails: null
  })),
}))

export default useStore;