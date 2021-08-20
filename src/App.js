import {Container} from '@material-ui/core'
import { Route, Switch, useParams } from 'react-router-dom';
import Home from './pages/Home'

function PokemonPage(){
  const params = useParams();
  return <h1>The pokemon you clicked {params.name}</h1>
}

function App() {
  return (
    <>
    <Container maxWidth="sm" >
      <Route exact path="/">
      <Home/>
      </Route> 
      <Route exact path="/pokemon/:name">
        <PokemonPage/>
      </Route> 
    </Container>
    </>
  );
}

export default App;
