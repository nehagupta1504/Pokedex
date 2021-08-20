import { Container } from "@material-ui/core";
import { Route, Switch, useParams } from "react-router-dom";
import Home from "./pages/Home";
import { PokeApi } from "./api/pokeApi";
import { useEffect, useState } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import { lightBlue } from "@material-ui/core/colors";
import { Header } from "./components/Header";
function CenteredElement(props) {
  const { children } = props;
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      {children}
    </div>
  );
}
function getPokemonImageFromData(data) {
  console.log(data);
  const defaultImage =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQspRLSyvHT0T3zzqsaQbEfNrEOHf6w8IJDZw&usqp=CAU";

  const frontDefault =
    data["sprites"]["other"]["official-artwork"]["front_default"];
  console.log(frontDefault);
  return frontDefault;
}
function Pokemon(props) {
  const { data } = props;
  if (!data) {
    return null;
  }

  console.log(data);
  return (
    <>
      <div
        style={{
          width: "100%",
          backgroundColor: "lightBlue",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img
          src={getPokemonImageFromData(data)}
          width={300}
          height={300}
          alt="Pokeball"
        />
      </div>
      <div>
        {data.name}
        {data.height}
      </div>
    </>
  );
}
function PokemonPage() {
  const params = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [pokemonData, setpokemonData] = useState("");
  const [isError, setIsError] = useState(false);
  const { name } = params;
  useEffect(function () {
    PokeApi.getPokemonByName(name)
      .then((data) => {
        setIsLoading(false);
        setpokemonData(data);
      })
      .catch((er) => {
        setIsLoading(false);
        setIsError(true);
      });
  }, []);

  if (isLoading) {
    return (
      <CenteredElement>
        <CircularProgress color="secondary" />
      </CenteredElement>
    );
  }
  if (isError) {
    return (
      <CenteredElement>
        Network error, try again after some time
      </CenteredElement>
    );
  }
  return (
    <>
      <h1>More data for {params.name}</h1>
      <Pokemon data={pokemonData}></Pokemon>
    </>
  );
}

function App() {
  return (
    <>
      <Container maxWidth="sm">
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/pokemon/:name">
            <PokemonPage />
          </Route>
        </Switch>
      </Container>
    </>
  );
}

export default App;
