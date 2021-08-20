const baseURL = "http://pokeapi.co/api/v2/";
class PokeApi {
  constructor() {
    throw new Error("Can't be constructed");
  }
  static getPokemonByName(pokemonName) {
    //better way to use is URL constructor
    const url = baseURL + "pokemon/" + pokemonName;
    return fetch(url).then((response) => response.json());
  }
}

export { PokeApi };
