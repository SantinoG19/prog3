import React, { Component } from "react";
import './VerTodas'
import CardsContainer from "../../components/CardConteiner/CardComteiner"

class VerTodas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pelisTodo:[],
      seriesTodo:[]
    };
  }

  componentDidMount() {
    let endpoint = this.props.match.params.category;
    console.log (endpoint)
    if (endpoint === "top_rated"){
      fetch(`https://api.themoviedb.org/3/movie/${endpoint}?api_key=ba0b591fbb4dcbf21e7a279fceca5d5e&language=en-US&page=1`)
      .then((response) => response.json())
      .then((data) => 
          this.setState({
            pelisTodo : data.results
          })

      )
      .catch((error) => console.log("El error es: " + error));
      }
    else{
      fetch(`https://api.themoviedb.org/3/tv/popular?api_key=a3c55e0abc72e6abaa573f83ee40635f&language=en-US&page=1`)
      .then((response) => response.json())
      .then((data) =>{
          this.setState({
            seriesTodo : data.results
          })
      })
      .catch((error) => console.log("El error es: " + error));
    }
  }

  filtrado(texto) {
    let contFiltrado = this.state.contenido.filter((contenido) => {
      return contenido.name.toLowerCase().includes(texto.toLowerCase());
    });
    this.setState({
      contenido: contFiltrado,
    });
  }

  render() {
    console.log(this.state.pelisTodo);
    console.log(this.state.seriesTodo);
    return(
      <React.Fragment>
    
        <h3>VER TODAS:</h3>
        {this.state.pelisTodo.length > 0  || this.state.seriesTodo.length > 0 ? 
          (this.state.pelisTodo.length > 0 ? 
            <CardsContainer verMasMovies={this.state.pelisTodo}/> : 
            <CardsContainer verMasSeries={this.state.seriesTodo}/> )
        : <h3>Cargando ...</h3>}
       
        
      </React.Fragment>
    )
  }
}

export default VerTodas;