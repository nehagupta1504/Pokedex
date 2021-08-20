import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
function RenderFavourites(props) {
  const { children } = props;
  return (
    <div
      style={{
        backgroundColor: "lightgreen",
        borderRadius: "10px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "10px 10px",
        fontWeight: "bolder",
        margin: "2px 0",
      }}
    >
      {children}
    </div>
  );
}

const Favourites = () => {
  const [favourites] = useState(function () {
    const val = localStorage.getItem("pokemons");
    if (val) {
      return JSON.parse(val);
    } else {
      return [];
    }
  });
  return favourites.length ? (
    <div>
      <h1>Favourites</h1>
      {favourites.map((el) => {
        return (
          <RenderFavourites key={el}>
            <Link to={"/pokemon/" + el.toLowerCase()}>{el}</Link>
          </RenderFavourites>
        );
      })}
    </div>
  ) : null;
};

export default Favourites;
