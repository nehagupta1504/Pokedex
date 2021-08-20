import {Link, BrowserRouter} from 'react-router-dom';
import sampleSize from 'lodash/sampleSize';
import {pokemons} from '../pokemonList';
function GalleryItem(props){
  const {children} = props;
  return  <div style={{width:'31%', height:'100px',margin:'1%', backgroundColor:'red'}}>{children}</div>
}

function PokemonGallery(){
  const randomPokemons = sampleSize(pokemons, 9);
  console.log(randomPokemons);
  return(
    <div style={{display:'flex', flexWrap:'wrap', justifyContent:'center'}}>
      {randomPokemons.map((pokemon)=>{
        const {name} = pokemon;
        return(
        <GalleryItem key="name">
          <Link to={"/pokemon/"+name}>{name}</Link>
        </GalleryItem>
         )
      })}
    </div>
  )
}

export {PokemonGallery}