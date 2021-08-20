import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { pokemons } from "../pokemonList";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { PokemonGallery } from "../components/PokemonGallery";
import { Link } from "react-router-dom";
import Favourites from "../components/Favourites";

const Home = () => {
  const [selection, setSelection] = useState(null);
  return (
    <>
      <div style={{ marginTop: "20px", display: "flex" }}>
        <Autocomplete
          id="combo-box-demo"
          options={pokemons}
          getOptionLabel={(option) => {
            const { name } = option;
            return name[0].toUpperCase() + name.substr(1);
          }}
          style={{ width: 300, flexGrow: 1 }}
          renderInput={(params) => (
            <TextField {...params} label="Combo box" variant="outlined" />
          )}
          onChange={function (event, currentSelection) {
            setSelection(currentSelection);
            console.log(currentSelection);
          }}
        />
        <Link
          to={selection ? "pokemon/" + selection.name : "/"}
          component={function (props) {
            return (
              <Button
                variant="contained"
                color="primary"
                style={{ flexGrow: 0.2, margin: "0 0  0 15px" }}
                {...props} //TO pass all the props of link to button
              >
                Go To Pokémon
              </Button>
            );
          }}
        ></Link>
      </div>
      <div>
        <h1>Pokemon Gallery</h1>
        <PokemonGallery />

        <Favourites />
      </div>
    </>
  );
};

export default Home;
