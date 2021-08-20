import { Link, BrowserRouter } from "react-router-dom";
import sampleSize from "lodash/sampleSize";
import { pokemons } from "../pokemonList";
import Button from "@material-ui/core/Button";
import { repeat } from "lodash";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Favourites from "../components/Favourites";
import { useState } from "react";

function GalleryItem(props) {
  const { children, pokemonName } = props;
  const [isInLocalStorage, setisInLocalStorage] = useState(false);
  return (
    <div
      style={{
        backgroundColor: "lightgreen",
        borderRadius: "10px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "10px 10px",
        flexDirection: "column",
      }}
    >
      <div style={{ padding: "5px 0" }}>{children}</div>
      <Button
        color="secondary"
        onClick={() => {
          setisInLocalStorage(!isInLocalStorage);
          const key = "pokemons";
          let val = localStorage.getItem(key);
          if (val) {
            let objectArray = JSON.parse(val);
            objectArray.push(pokemonName);
            localStorage.setItem(key, JSON.stringify(objectArray));
          } else {
            const stringifiedArray = JSON.stringify([pokemonName]);
            localStorage.setItem(key, stringifiedArray);
          }
        }}
      >
        <FavoriteIcon
          style={isInLocalStorage ? { color: "black" } : { color: "pink" }}
        />
      </Button>
    </div>
  );
}

function PokemonGallery() {
  //selectng random 9 pokeons
  const randomPokemons = sampleSize(pokemons, 9);
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: " repeat(3, 1fr) ",
        gridTemplateRows: "repeat(3, 1fr)",
        gridGap: "10px",
        height: "400px",
      }}
    >
      {randomPokemons.map((pokemon) => {
        let { name } = { ...pokemon };
        name = name[0].toUpperCase() + name.substr(1);
        return (
          <GalleryItem key="name" pokemonName={name}>
            <Link
              to={"/pokemon/" + name.toLowerCase()}
              style={{
                textDecoration: "none",
                color: "black",
                fontWeight: "bolder",
              }}
            >
              {name}
            </Link>
          </GalleryItem>
        );
      })}
    </div>
  );
}

export { PokemonGallery };
