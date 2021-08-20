import React ,{useState} from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import { pokemons } from '../pokemonList';
import Autocomplete from '@material-ui/lab/Autocomplete';
import {PokemonGallery} from "../components/PokemonGallery";
import {Link} from 'react-router-dom'
const Home = () => {
  const [selection, setSelection]= useState(null);
    return (
       <>
       <div className="App" style={{display:'flex',backgroundColor:'lightgray', justifyContent:'space-around'}}>
        <h1>My Pokedex</h1>
      </div>
     
    
    <div style={{marginTop:'20px', display:'flex'}}>
    <Autocomplete
      id="combo-box-demo"
      options={pokemons}
      getOptionLabel={(option) =>{
        const {name} = option;
        return name[0].toUpperCase()+name.substr(1);
      }}
      style={{ width: 300, flexGrow:1 }}
      renderInput={(params) => <TextField {...params} label="Combo box" variant="outlined" />}
      onChange={function(event, currentSelection){
        setSelection(currentSelection)
      }}
      
    />
    <Link to={selection?'pokemon/'+selection:'/'}>Go To Pokémon</Link>
    {/* <Button variant="contained" color="primary" style={{flexGrow:0.4}}</Button> */}
      
    </div>
    <div>
      <h1>Pokemon Gallery</h1>
        <PokemonGallery/>
    </div>
       </>

    )
}

export default Home
